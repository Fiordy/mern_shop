import JWT from "jsonwebtoken";
import dotenv from "dotenv";

const generateToken = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
