import faunadb, { query as q}  from 'faunadb';
import {decryptedPayload } from './EncryptLogic';


const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  const receivedData = JSON.parse(decryptedPayload(req.body));
  const olha = await serverClient.query(
    q.Update(
      q.Select(['instance'], q.KeyFromSecret(receivedData.authToken)),
      {
        data: { wingsFly: receivedData?.wingsFly },
      },
    )
  )
  .then((ret) => {
    return ret
  })
  .catch((err) => console.error('Error: %s', err))
  return res.status(200).json({ message: '21uui3oi2weijsjaweqweqwethggnissjoi123'});
}

