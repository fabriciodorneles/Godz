import faunadb, { query as q } from 'faunadb';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  const {highScore, authToken} = JSON.parse(req.body);
  console.log('o highscore é: ', highScore);
  console.log('authToken: ', authToken);


  const _response = await serverClient.query(
    q.Get(
      q.Select(['instance'], q.KeyFromSecret(authToken)),
    )
  )
  .then((ret) => {
    console.log('return',ret);
    return ret
  })
  .catch((err) => console.error('Error: %s', err))

  console.log('===> ', _response.data.highScore);

  return res.status(200).json({ highScore: _response.data.highScore });
}
