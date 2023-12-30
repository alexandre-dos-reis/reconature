import { Base } from "../shared/base";
import { Flore } from "../../directus/types";

export const FlorePage = (f: Flore) => (
  <Base>
    <main>
      <div>{f.identification}</div>
      <h1>{f.scientific_name}</h1>
      <h2>{f.common_name}</h2>
    </main>
  </Base>
);
