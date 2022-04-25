import { Client } from "twitter-api-sdk";
import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { text } from "stream/consumers";

const client = new Client(process.env.BEARER_TOKEN as string);


async function main() {
  const tweet = await client.tweets.findTweetById("20");
  console.log(tweet?.data?.text);
}

main();