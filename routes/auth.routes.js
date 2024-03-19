const authController = require("../controllers/auth.controller");
const { verifySignUp } = require("../middlewares");
module.exports = (app) => {
  //  POST 127.0.0.1:8081/crm/api/v1/auth/signup
  app.post(
    "/crm/api/v1/auth/signup",
    [verifySignUp.validateSignUpRequest],
    authController.signup
  );

  //Sign POST 127.0.0.1:8081/crm/api/v1/auth/signin
  app.post("/crm/api/v1/auth/signin", authController.signin);
};
