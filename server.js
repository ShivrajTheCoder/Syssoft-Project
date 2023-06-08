const express = require("express");
const app = express();
const cors = require("cors");
const { connectToDatabase } = require("./db_connection");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());

(async () => {
  try {
    await connectToDatabase();
    console.log("Connected to the database successfully!");
  } catch (err) {
    console.log(err);
  }
})();

// Routes
const UserRoutes = require("./Routes/UserRoutes");
app.use("/user", UserRoutes);

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
