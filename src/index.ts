import { Elysia } from "elysia";
import { ENV_VARS } from "./config/env-vars";
import { getFloresByIdentification } from "./directus/flores";

// 3 ecrans: search, One Flore and a 404
const app = new Elysia()
  .get("/", async () => {
    // handle input and redirect ...
  })
  .get("/flores/:id", async ({ params: { id } }) => {
    const flore = await getFloresByIdentification({ identification: id });
    if (flore) {
      return flore;
    } else {
      return "404";
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
