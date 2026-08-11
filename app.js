import express from "express";

import userRoutes from "./routes/userRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";

const app = express();

app.use(express.json());

//routes
app.use("/users", userRoutes);

app.use("/subjects", subjectRoutes);

export default app;
