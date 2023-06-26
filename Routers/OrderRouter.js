const Router = require("express").Router();
const Auth = require("../Middlewares/AuthMiddleware");
const {
  OrderControllerCreateOrder,
  OrderControllerEditOrder,
  OrderControllerGetSingleOrder,
  OrderControllerGetOrder,
  OrderControllerDeleteOrder,
} = require("../Controllers/OrderController");

Router.route("/createOrder").post(Auth, OrderControllerCreateOrder);
Router.route("/editOrder").post(Auth, OrderControllerEditOrder);
Router.route("/deleteOrder").post(Auth, OrderControllerDeleteOrder);
Router.route("/getSingleOrder").post(Auth, OrderControllerGetSingleOrder);
Router.route("/getOrder").post(Auth, OrderControllerGetOrder);
module.exports = Router;
