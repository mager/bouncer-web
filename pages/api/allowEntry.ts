// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  })
  const { address, snowflake } = req.query

  const url = `https://bouncer-kbh53rdmoq-uc.a.run.app/allowEntry`
  const response = await fetch(url, {
    headers,
    method: 'POST',
    redirect: 'follow',
    body: JSON.stringify({ address, snowflake }),
  })
  const collections = await response.json()

  res.status(200).json(collections)
}

export default handler
