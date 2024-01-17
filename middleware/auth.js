import jwt from "jsonwebtoken";


const verifyToken = (req, res, next) => {
  const token = req.body.token;
  try {
    if (!token) return res.status(404).send("Token is required")
    req.user = jwt.verify(token, "MettihewJ");
} catch (error) {
  //  return res.status(500).send("Token is expired")
   throw new Error(error)
  }
  return next()
};

export default verifyToken;
