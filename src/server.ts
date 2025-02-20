import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY || "default_api_key";

// Middleware to check API key
// app.use((req: Request, res: Response, next) => {
//   const apiKey = req.headers["x-api-key"];
//   if (apiKey !== API_KEY) {
//     return res.status(403).json({ message: "Forbidden: Invalid API Key" });
//   }
//   next();
// });

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Home Page of EMR");
});

// Patient route
app.get("/patient", (req: Request, res: Response) => {
  res.send("Welcome to the Patient Page");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
