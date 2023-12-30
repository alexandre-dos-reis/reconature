import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { getFloresByIdentification } from "./directus/flores";
import { HomePage } from "./views/pages/home";
import { FlorePage } from "./views/pages/flore";
import { z } from "zod";
import staticPlugin from "@elysiajs/static";

const floreIdKey = "flore-id";
const minChar = 1;
const maxChar = 6;
const queryError = "error";

const schema = z.object({
  [floreIdKey]: z
    .string()
    .min(minChar, "Veuillez entrer un numéro !")
    .max(maxChar, `Le numero doit contenir ${maxChar} caractères maximum !`)
    .refine((v) => !isNaN(parseInt(v, 10)), "Le numéro est invalide !")
    .refine((v) => Number(v) > 0, "Le numéro doit etre positif !"),
});

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ assets: "public" }))
  .all("/", async ({ request, set, body, query }) => {
    let error: Record<string, Array<string>> | null = null;

    if (request.method === "POST") {
      const parsedSchema = schema.safeParse(body);

      if (parsedSchema.success) {
        set.redirect = `/flores/${parsedSchema.data[floreIdKey]}`;
        return;
      } else {
        error = parsedSchema.error.flatten().fieldErrors;
      }
    }

    return (
      <HomePage
        error={query[queryError] ?? error?.[floreIdKey][0]}
        name={floreIdKey}
        inputValue={(body as Record<string, any>)?.[floreIdKey]}
        minChar={minChar}
        maxChar={maxChar}
      />
    );
  })
  .get("/flores/:id", async ({ params: { id }, set }) => {
    const flore = await getFloresByIdentification({ identification: id });
    if (flore) {
      return FlorePage(flore);
    } else {
      set.status = "Not Found";
      set.redirect = `/?${queryError}=${encodeURIComponent(
        "Elément non trouvé !",
      )}`;
      return;
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
