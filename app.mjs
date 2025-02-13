import express from "express";
import cors from "cors";
import { PORT } from "./config/env.mjs";
import userRouter from "./routes/user.routes.mjs";
import authRouter from "./routes/auth.routes.mjs";
import subscriptionRouter from "./routes/subscription.routes.mjs";
import connectDB from "./database/mongodb.mjs";
import errorMiddleware from "./middlewares/error.middleware.mjs";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcject.middleware.mjs";
import workflowRouter from "./routes/workflow.route.mjs";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(arcjetMiddleware);
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflow", workflowRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(PORT, async () => {
  console.log(`Subscription tracker API is running on port ${PORT}`);
  await connectDB();
});

export default app;
