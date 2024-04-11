import RecipeModel from "./models/recipes-model.js";
import RecipesAppView from "./view/recipes-app/recipes-view.js";
import RecipeController from "./controllers/recipe-app/recipes-controller.js";

window.addEventListener("load", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const pathname = window.location.pathname;

  if (!user && pathname !== "/login.html" && pathname !== "/sign-up.html") {
    window.location.replace("login.html");
  }

  const recipeAppController = new RecipeController(
    new RecipeModel(),
    new RecipesAppView()
  );
  recipeAppController.init();
});
