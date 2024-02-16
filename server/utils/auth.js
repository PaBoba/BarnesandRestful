const jwt = require("jsonwebtoken");
const { secret } = require("./auth"); // Import the secret from auth.js

async function getUser(token) {
  if (!token) {
    throw new Error("No token provided");
  }

  try {
    const { data } = jwt.verify(token, secret);
    return data;
  } catch (err) {
    console.error("Invalid token");
    throw new Error("Invalid token");
  }
}
// Set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  secret,
  expiration,
};
