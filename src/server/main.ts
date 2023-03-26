import path from "path";
import express from "express";
import ssr from "./renderer";

const app = express();
// console.log(path.join(__dirname, "..", "public"), "dir")
app.use(express.static("public"));

app.get("/health", (_req, res) => {
  res.send("OK");
});

app.get("*", (req, res) => {
  const page = ssr();
  res.send(page);
});

const PORT = process.env.PORT || 3000;
console.log("port", process.env.PORT);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
