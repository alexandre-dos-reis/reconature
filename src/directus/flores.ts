import { directus } from "./index";
import { readItems } from "@directus/sdk";

export const getFloresByIdentification = async (args: {
  identification: string;
}) => {
  return (
    await directus.request(
      readItems("flores", {
        limit: 1,
        filter: { identification: { _eq: parseInt(args.identification, 10) } },
      }),
    )
  ).slice(0, 1);
};
