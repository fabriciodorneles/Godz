import faunadb, { query as q } from 'faunadb';
import {decryptedPayload, encryptedResponse } from './EncryptLogic';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  const {authToken} = JSON.parse(decryptedPayload(req.body));

  const _response = await serverClient.query(
    q.Get(
      q.Select(['instance'], q.KeyFromSecret(authToken)),
    )
  )
  .then((ret) => {
    return ret
  })
  .catch((err) => console.error('Error: %s', err))

  return res.status(200).json(encryptedResponse({
    wingsFly: _response.data.wingsFly || 0,
  }));
}
