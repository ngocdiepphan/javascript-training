import RecipeDetailController from "./controllers/recipe-detail/recipe-detail-controller.js";
import RecipeDetailView from "./view/recipe-detail-view.js/recipe-detail-view.js";
import RecipeModel from "./models/recipes-model.js";

window.addEventListener("load", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const pathname = window.location.pathname;

  if (!user && pathname !== "/login.html" && pathname !== "/sign-up.html") {
    window.location.replace("login.html");
  }

  const recipeDetailController = new RecipeDetailController(
    new RecipeModel(),
    new RecipeDetailView()
  );
  recipeDetailController.init();
});
