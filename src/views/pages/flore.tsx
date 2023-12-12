import { Base } from "../shared/base";
import { Flore } from "../../directus/types";

export const FlorePage = (f: Flore) => (
  <Base>
    <main>
      <h1>{f.scientific_name}</h1>
      <h2>{f.common_name}</h2>
      <h2>{f.gender}</h2>
      <div>{f.identification}</div>
    </main>
  </Base>
);
