// db/index.js
import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/node-express-example-dev",
      {
        // Remove the following options:
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default { connect };
