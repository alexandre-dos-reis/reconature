import { Elysia } from "elysia";
import { createDirectus, rest, readItems } from "@directus/sdk";
import { ENV_VARS } from "./config/env-vars";

interface Flore {
  identification: number;
  scientific_name: string;
  common_name: string;
  gender: string;
}

interface Schema {
  flores: Flore[];
}

const client = createDirectus<Schema>(ENV_VARS.DIRECTUS_ENDPOINT).with(rest());

// 3 ecrans: search, One Flore and a 404
const app = new Elysia()
  .get("/", async () => {
    const flores = await client.request(readItems("flores"));

    console.log({ flores });
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
