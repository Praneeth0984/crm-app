const express = require("express");
const serverConfig = require("./configs/server.config");
const dbConfig = require("./configs/db.config");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const User = require("./models/user.model");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(dbConfig.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    init();
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

async function init() {
  var user = await User.findOne({ userId: "admin" });

  if (user) {
    return;
  } else {
    //Create the admin user

    const user = await User.create({
      name: "Vish",
      userId: "admin",
      email: "kankvish7777@gmail.com",
      userType: "ADMIN",
      password: bcrypt.hashSync("Welcome00123", 8),
    });
    console.log("admin user is created");
  }
}

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/ticket.routes")(app);
module.exports = app.listen(serverConfig.PORT, () => {
  console.log("Application has started on the port ", serverConfig.PORT);
});
