import { Client } from "twitter-api-sdk";
import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { text } from "stream/consumers";

const client = new Client(process.env.BEARER_TOKEN as string);


async function main() {
  const { data } = await client.users.findUserByUsername("ziakhan");
  if (!data) throw new Error("Couldn't find user");
  console.log("User ID: " + data?.id);
  console.log("User Name: " + data?.name);
}

main();