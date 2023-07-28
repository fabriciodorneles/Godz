import faunadb, { query as q } from 'faunadb';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  const {authToken} = JSON.parse(req.body);

  return res.status(200).json({
    token: req,
    planetRun: _response.data.planetRun,
    FireHit: _response.data.FireHit,
    highScore: _response.data.highScore
  });
}
