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
  Ref
} from 'faunadb';
import {decryptedPayload, encryptedResponse } from './EncryptLogic';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  const { signed_msg } = JSON.parse(decryptedPayload(req.body));
  const { address } = await Web3Token.verify(signed_msg);
  try {
    // Find user
    const user = await serverClient.query(
      Get(
        Match(Index('user_by_public_address'), address)
        )
      )
    const accessToken = await createAccessToken(user.ref.id, 3600);
    res.status(200).json(encryptedResponse({ token: accessToken.secret }));

  } catch (error) {
    // User not found. Ask to Register.
    if(error.name === 'NotFound') {
      return res.status(202).json({ message: 'User Not in database.' });
    }

    // authentication error
    if (error.name === 'Unauthorized') {
      return res.status(401).json({ message: 'Invalid Fauna Secret or Token' });
    }
  }

}
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
