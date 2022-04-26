import dotenv from "dotenv-flow";
import express from "express";
import path from "path";

dotenv.config({ silent: true });

const port = process.env.SERVER_PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({});
});

app.listen(port, () => {
  // tslint:disable-next-line: no-console
  console.log(`Server is running at http://localhost:${port}`);
});
