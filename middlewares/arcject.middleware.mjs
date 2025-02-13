import aj from "../config/arcjet.mjs";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit) {
        return res.status(429).json({
          error: "Too many requests",
        });
      }
      if (decision.reason.isBot) {
        return res.status(403).json({
          error: "Detected bot",
        });
      }
      return res.status(403).json({
        error: "Detected bot",
      });
    }
    next();
  } catch (error) {
    console.log(`Arcjet middleware error:${error}`);
    next(error);
  }
};

export default arcjetMiddleware;
