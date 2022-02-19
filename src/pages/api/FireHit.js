import faunadb, { query as q}  from 'faunadb';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  const {FireHit, authToken} = JSON.parse(req.body);

  const olha = await serverClient.query(
    q.Update(
      q.Select(['instance'], q.KeyFromSecret(authToken)),
      {
        data: {
          FireHit,
        },
      },
    )
  )
  .then((ret) => {
    return ret
  })
  .catch((err) => console.error('Error: %s', err))
  console.log('O HighScore é', FireHit);
  return res.status(200).json({ message: 'O High Score é'+ FireHit});
}

