import type { Context } from "@netlify/functions"
import { getStore } from "@netlify/blobs";

export default async (req: Request, context: Context) => {

  const construction = getStore("construction");

  await construction.setJSON("nails","va");

  return Response.json({ message : "Hello, world!"})
}