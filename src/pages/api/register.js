
import Web3Token from 'web3-token';
import faunadb, {
  Get,
  Match,
  Index,
  Create,
  Collection,
  TimeAdd,
  Now,
  Tokens,
  Ref,
} from 'faunadb';
const requestIp = require('request-ip');



const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  const clientIp = requestIp.getClientIp(req);
  console.log('--> IP <-- ', clientIp);
  const {signed_msg, name, email, discord} = JSON.parse(req.body);
  const { address } = await Web3Token.verify(signed_msg);
  console.log('Public Address Retrieved', address);

  try {
    // Find if has IP in database
    const userByIp = await serverClient.query(
      Get(
        Match(Index('user_by_ip_address'), clientIp)
      )
    )
    console.log('userByIP', userByIp.clientIP);
    return res.status(202).json({ message: 'IP already registered.' });
  } catch (error) {
    if(error.name === 'NotFound') {
      try {
        // Find user
        const user = await serverClient.query(
          Get(
            Match(Index('user_by_public_address'), address)
          )
        )
        const accessToken = await createAccessToken(user.ref.id, 3600);
        res.status(200).json({ token: accessToken.secret });
      } catch (error) {
        // If user not found in database create a new user
        if(error.name === 'NotFound') {
          const data = {
            public_address: address,
            name,
            email,
            discord,
            highScore: 0,
            clientIP:clientIp
          }
          const newUser = await registerUser(data)
          const accessToken = await createAccessToken(newUser.ref.id, 3600);
          return res.status(200).json({ token: accessToken.secret });
        }

        // authentication error
        if (error.name === 'Unauthorized') {
          return res.status(401).json({ message: 'Invalid Fauna Secret or Token' });
        }
      }
    }
  }
}

// Registers a new User in FaunaDB
const registerUser = (data) => {
  return serverClient.query(
      Create(
        Collection('User'), {data}),
  );
};

// Generate an access Token For Fauna
const createAccessToken = (ref, ttl) => {
  return serverClient.query(
    Create(Tokens(), {
      instance: Ref(Collection("User"), ref),
      data: {
        type: "access"
      },
      ttl: TimeAdd(Now(), ttl, "seconds"),
    })
  );
};
