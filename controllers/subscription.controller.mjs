import Subscription from "../models/subscription.model.mjs";
import { workflowClient } from "../config/upstash.mjs";

export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    await workflowClient.trigger({ url: `${SERVER_URL}` });
    return res.status(201).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserSubscriptions = async (req, res, next) => {
  try {
    //Check if the user is the same one in the token
    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.statusCode = 401;
      throw error;
    }
    const subscriptions = await Subscription.find({ user: req.params.id });
    return res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllSubscriptions = async (req, res, next) => {
  try {
    const allSubscriptions = await Subscription.find();
    if (!allSubscriptions) {
      return res.status(404).json({
        success: false,
        message: "Np subscriptions found",
      });
    }
    return res.status(200).json({
      success: true,
      data: allSubscriptions,
    });
  } catch (error) {
    next(error);
  }
};
