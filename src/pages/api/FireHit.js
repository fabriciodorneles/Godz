import faunadb, { query as q}  from 'faunadb';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  const {planetRun, authToken} = JSON.parse(req.body);

  const olha = await serverClient.query(
    q.Update(
      q.Select(['instance'], q.KeyFromSecret(authToken)),
      {
        data: {
          planetRun,
        },
      },
    )
  )
  .then((ret) => {
    return ret
  })
  .catch((err) => console.error('Error: %s', err))
  return res.status(200).json({ message: 'Hey hacker gods are watching you!!'});
}

