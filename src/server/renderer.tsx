import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";

const getMarkup = (app: string) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">${app}</div>

    <script src="bundle.js"></script>
</body>
</html>`;

const ssr = () => {
  const content = renderToString(<App />);
  console.log("content", content, App);
  const html = getMarkup(content);
  console.log(html);

  return html;
};

export default ssr;
