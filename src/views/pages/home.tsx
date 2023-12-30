import { cn } from "../../utils";
import { Magnifier } from "../icons/Magnifier";
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
      <form
        method="post"
        novalidate
        autocomplete="off"
        class={cn("w-full flex flex-col items-center")}
      >
        <div class={cn("bg-amber-900 p-6 rounded-lg")}>
          <div
            class={cn(
              "bg-gray-200 flex flex-nowrap rounded-full overflow-auto mx-3 pr-1 border-2 items-center justify-center",
              "border-amber-800",
              p.error ? "border-red-500" : "focus-within:border-lime-500",
            )}
          >
            <input
              id={inputId}
              name={p.name}
              value={p.inputValue}
              type="number"
              min={p.minChar}
              max={p.maxChar}
              placeholder="Veuillez entrer un numéro d'identification..."
              autofocus="true"
              class={cn(
                "outline-none focus:outline-none", // Remove default style
                "w-full bg-transparent py-3 px-6 min-w-96",
              )}
            />
            <button
              type="submit"
              class={cn(
                "bg-lime-700 flex justify-center items-center p-3 rounded-full",
              )}
            >
              <Magnifier class={cn("fill-white")} />
            </button>
          </div>
        </div>
        {p.error ? (
          <div class={cn("mt-6 flex text-red-500")}>{p.error}</div>
        ) : null}
      </form>
    </Base>
  );
};
