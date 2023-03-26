import express from "express";

const app = express();

app.get("/health", (_req, res) => {
  res.send("OK");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
