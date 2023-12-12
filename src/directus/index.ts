import { createDirectus, rest, readItems, readItem } from "@directus/sdk";
import { ENV_VARS } from "../config/env-vars";
import { Flore } from "./types";

interface Schema {
  flores: Flore[];
}

export const directus = createDirectus<Schema>(ENV_VARS.DIRECTUS_ENDPOINT).with(
  rest(),
);
