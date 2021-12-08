const mongoose = require("mongoose");

const connectDB = async (url) => {
  await mongoose
    .connect(url)
    .then(() => console.log("connected to db..."))
    .catch((err) => console.log(err));
};

// connectDB(process.env.MONGO_URL)

module.exports = connectDB;
