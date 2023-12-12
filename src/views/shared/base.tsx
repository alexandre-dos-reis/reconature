import {} from "@elysiajs/html";
export const Base = ({ children, ...bodyProps }: JSX.HtmlBodyTag) => (
  <html lang="fr">
    <head>
      <title>Reco'Nature</title>
    </head>
    <body {...bodyProps}>{children}</body>
  </html>
);
