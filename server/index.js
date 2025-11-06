import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";

dotenv.config();

const app = express();

// ✅ Use a safer port (5000) if PORT isn’t set in .env
const PORT = process.env.PORT || 5000;

// ✅ Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"], // frontend URL
    credentials: true, // allow cookies/auth
  })
);

// ✅ Routes
app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
