import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { ENV_VARS } from "./config/env-vars";
import { getFloresByIdentification } from "./directus/flores";
import { HomePage } from "./views/pages/home";
import { FlorePage } from "./views/pages/flore";
import { FloreNotFoundPage } from "./views/pages/flore-not-found";

// 3 ecrans: search, One Flore and a 404
const app = new Elysia()
  .use(html())
  .get("/", () => HomePage())
  .get("/flores/:id", async ({ params: { id } }) => {
    const flore = await getFloresByIdentification({ identification: id });
    if (flore) {
      return FlorePage(flore);
    } else {
      return FloreNotFoundPage();
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
