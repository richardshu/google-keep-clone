import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
