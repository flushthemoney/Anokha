import dotenv from "dotenv";
dotenv.config();

module.exports = {
  jwt: {
    secret: process.env.JWTSECRET,
    options: {
      audience: "https://www.locaro.in",
      expiresIn: "7d",
      issuer: "locaro.in",
    },
    cookie: {
      // CHANGE HTTPONLY TO TRUE AND SAMESITE TO TRUE
      httpOnly: true,
      sameSite: true,
      signed: true,
      secure: true,
    },
  },
};
