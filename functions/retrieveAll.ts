import type { Context } from "@netlify/functions"
import { getStore } from "@netlify/blobs";

export default async (req: Request, context: Context) => {
    const submissions = getStore("submissions");
    const { blobs } = await submissions.list(); 
  return Response.json(blobs)
}