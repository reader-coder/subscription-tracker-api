import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.mjs";
import authorize from "../middlewares/auth.middleware.mjs";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "CEEATE a new user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE user" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE a user" });
});

export default userRouter;
