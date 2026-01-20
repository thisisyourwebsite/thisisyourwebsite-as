import express from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from public directory
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

// Handle client-side routing - serve index.html for all routes
app.get("*", (_req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(publicPath, "index.html"));
});

export default app;
