import { Base } from "../shared/base";

export const HomePage = (p: {
  name: string;
  inputValue?: string;
  error?: string;
  minChar?: number;
  maxChar?: number;
}) => {
  const inputId = `input-${p.name}`;
  return (
    <Base>
      <main>
        <h1>Reco'Nature</h1>
        <form method="post" novalidate autocomplete="off">
          <label for={inputId}>
            Veuillez entrer un numéro d'identification
          </label>
          <input
            id={inputId}
            name={p.name}
            value={p.inputValue}
            type="number"
            min={p.minChar}
            max={p.maxChar}
          />
          <button type="submit">Rechercher</button>
          {p.error ? <div>{p.error}</div> : null}
        </form>
      </main>
    </Base>
  );
};
