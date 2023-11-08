indexRouter= require("express").Router();

const productsRouter = require("./productsRoute");
const userRouter = require("./usersRouter");
const emailRouter = require("./emailRouter");
const favsRouter = require("./favoritesRoute");
//const tablesRouter = require("./tablesRouter");



indexRouter.use("/products", productsRouter);
indexRouter.use("/users", userRouter);
indexRouter.use("/email", emailRouter);
indexRouter.use("/favs", favsRouter);
//indexRouter.use("/tables", tablesRouter);

module.exports = indexRouter;
