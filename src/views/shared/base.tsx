import { cn } from "../../utils";

export const Base = ({ children, ...bodyProps }: JSX.HtmlBodyTag) => (
  <html lang="fr">
    <head>
      <title>Reco'Nature</title>
      <link rel="stylesheet" href="/public/assets/main.css" />
    </head>
    <body {...bodyProps} class="bg-stone-50">
      <main>
        <a href="/">
          <h1 class={cn("text-center text-3xl my-7")}>
            <span class="font-serif uppercase">Reco</span>'Nature
          </h1>
        </a>
        {children}
      </main>
    </body>
  </html>
);
