import faunadb, { query as q } from 'faunadb';

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });

export default async function handler(req, res) {
  return res.status(200).json({
    response: 'FOEEEEEEEE'
  });
}
