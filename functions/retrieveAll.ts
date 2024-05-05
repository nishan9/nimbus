import type { Context } from "@netlify/functions"
import { getStore } from "@netlify/blobs";

export default async (req: Request, context: Context) => {

//   const parts = req.url.split('/');
//   const id = parts[parts.length - 1];
//   const construction = getStore("submissions");
//   const entry1 = await construction.get(id, { type : "json" });

const submissions = getStore("submissions");
const { blobs } = await submissions.list(); 
  return Response.json(blobs)
}