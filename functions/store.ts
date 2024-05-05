import type { Context } from "@netlify/functions"
import { getStore } from "@netlify/blobs";
import {v4 as uuidv4} from 'uuid';

export default async (event : any, req: Request, context: Context) => {

  const data = await event.json(); 
  let myuuid = uuidv4();
  const submissions = getStore("submissions");

  await submissions.setJSON(myuuid, data["body"]);
  return Response.json({ "id" : myuuid})
}