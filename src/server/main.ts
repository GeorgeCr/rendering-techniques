import express from "express";

const app = express();

app.get("/health", (_req, res) => {
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
console.log("port", process.env.PORT);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
