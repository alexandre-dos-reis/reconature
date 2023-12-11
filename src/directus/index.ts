import { createDirectus, rest, readItems, readItem } from "@directus/sdk";
import { ENV_VARS } from "../config/env-vars";

interface Flore {
  identification: number;
  scientific_name: string;
  common_name: string;
  gender: string;
}

interface Schema {
  flores: Flore[];
}

export const directus = createDirectus<Schema>(ENV_VARS.DIRECTUS_ENDPOINT).with(
  rest(),
);
