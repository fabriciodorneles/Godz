import faunadb, { query as q}  from 'faunadb';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  const {highScore, authToken} = JSON.parse(req.body);
  console.log('o highscore é: ', highScore);
  console.log('authToken: ', authToken);

  const olha = await serverClient.query(
    q.Update(
      q.Select(['instance'], q.KeyFromSecret(authToken)),
      {
        data: {
          highScore,
        },
      },
    )
  )
  .then((ret) => {
    console.log('return',ret);
    return ret
  })
  .catch((err) => console.error('Error: %s', err))

  console.log('===> ', olha);
  return res.status(200).json({ message: 'O High Score é'+ highScore});
}

