import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import type { NextApiRequest, NextApiResponse } from "next";

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Social[]
}

export default function handler (
    rq: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const socials: Socaial[] = await sanityClient.fetch(query);

    res.status(200).json({ socials })
}