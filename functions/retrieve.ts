import type { Context } from "@netlify/functions"
import { getStore } from "@netlify/blobs";

export default async (req: Request, context: Context) => {



  const construction = getStore("construction");
  const entry1 = await construction.get("nails");


  return Response.json({ message : entry1 })
}