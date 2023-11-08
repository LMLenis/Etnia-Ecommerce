favsRouter = require("express").Router();

const {getAllFavorites, deleteFavorite, postFavorite} = require("../handlers/favoritesHandler");

favsRouter.get("/:id", getAllFavorites);

favsRouter.post("", postFavorite);

favsRouter.put("", deleteFavorite);

module.exports = favsRouter;