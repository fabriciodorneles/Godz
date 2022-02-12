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
  Paginate
} from 'faunadb';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  try {
    // Find user
    const highScoreList = await serverClient.query(
      Paginate(
        Match(Index('users_by_high_score'))
      )
    )
    console.log('HIGH SCORE -> ', highScoreList);
    res.status(200).json({ highScoreList });

  } catch (error) {
    // authentication error
    if (error.name === 'Unauthorized') {
      return res.status(401).json({ message: 'Invalid Fauna Secret or Token' });
    }
  }

}

