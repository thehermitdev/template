import express from "express";
import cors from "cors";
import { APP_NAME } from "@template/shared";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DATABASE_URL);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: `Hello from ${APP_NAME} Backend!` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
