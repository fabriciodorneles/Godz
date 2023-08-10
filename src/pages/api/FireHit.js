import faunadb, { query as q}  from 'faunadb';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  // const {planetRun, authToken} = JSON.parse(req.body);
  const receivedData = JSON.parse(req.body);
console.log('0', receivedData);
  let DataForServer = {};

  if (receivedData?.planetRun) {
    DataForServer = {planetRun:receivedData?.planetRun}
    console.log('1', DataForServer);
  }
  if (receivedData?.FireHit) {
    DataForServer = {FireHit:receivedData?.FireHit}
    console.log('2', DataForServer);
  }
  if (receivedData?.highScore) {
    DataForServer = {highScore:receivedData?.highScore}
    console.log('3', DataForServer);
  }
  if (receivedData?.wingsFly) {
    DataForServer = {wingsFly:receivedData?.wingsFly}
    console.log('3', DataForServer);
  }

  const olha = await serverClient.query(
    q.Update(
      q.Select(['instance'], q.KeyFromSecret(receivedData.authToken)),
      {
        data: DataForServer,
      },
    )
  )
  .then((ret) => {
    return ret
  })
  .catch((err) => console.error('Error: %s', err))
  return res.status(200).json({ message: 'Hey hacker gods are watching you!!'});
}

