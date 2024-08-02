import {
  renderListRecipesTemplate,
  renderListRecipesByCollectionTemplate,
  renderListRecipesBySweetTemplate,
} from "../../templates/recipes.js";
import { bindEvent } from "../../helpers";

export default class RecipesAppView {
  constructor() {
    this.recipesListEl = document.getElementById("latest-recipes");
    this.deliciousEl = document.getElementById("delicious-recipes");
    this.sweetEl = document.getElementById("sweet-recipes");
    this.outEL = document.querySelector(".navbar__icon-logout");
  }

  bindCallback = (event, handler) => {
    switch (event) {
      case "logOut":
        this.outEL.addEventListener("click", ()=>{
          localStorage.removeItem("user");
          alert("Logout successfully!")
      });
        break;
      default:
        break;
    }
  };

  /**
   * The renderRecipe method renders a list of recipes on the page.
   * @param {array} data - An array of recipe objects to be rendered.
   */
  renderRecipe = (data) => {
    // this.recipePageEl.innerHTML = renderRecipeHomeTemplate(data);
    this.recipesListEl.innerHTML = renderListRecipesTemplate(data);
  };

  /**
   * The renderDeliciousRecipe method renders a list of delicious recipes on the page.
   * @param {array} data - An array of recipe objects categorized as delicious.
   */
  renderDeliciousRecipe = (data) => {
    this.deliciousEl.innerHTML = renderListRecipesByCollectionTemplate(data);
  };

  /**
   * The renderSweetRecipe method renders a list of sweet recipes on the page.
   * @param {array} data - An array of recipe objects categorized as sweet.
   */
  renderSweetRecipe = (data) => {
    this.sweetEl.innerHTML = renderListRecipesBySweetTemplate(data);
  };

  /**
   * The showPageRecipeDetails function renders the details of a recipe on the page.
   * @param {object} recipeDetails - An object containing details of the recipe.
   * @param {string} recipeDetails.id - The ID of the recipe.
   * @param {string} recipeDetails.imageURL - The URL of the recipe's image.
   * @param {string} recipeDetails.name - The name of the recipe.
   * @param {string} recipeDetails.category - The category of the recipe.
   * @param {string} recipeDetails.creator - The creator of the recipe.
   * @param {number} recipeDetails.ratings - The ratings of the recipe.
   * @param {string} recipeDetails.description - The description of the recipe.
   * @param {string} recipeDetails.instruction - The instruction for preparing the recipe.
   * @param {string} recipeDetails.ingredient - The ingredients required for the recipe.
   * @param {string} recipeDetails.nutrition - The nutrition facts of the recipe.
   * @param {string} recipeDetails.createdAt - The creation date of the recipe.
   */
  showPageRecipeDetails = ({
    id,
    imageURL,
    name,
    category,
    creator,
    ratings,
    description,
    instruction,
    ingredient,
    nutrition,
    createdAt,
  }) => {
    this.panelEl.innerHTML = renderRecipeDetails({
      id,
      imageURL,
      name,
      category,
      creator,
      ratings,
      description,
      instruction,
      ingredient,
      nutrition,
      createdAt,
    });
    this.userDetailsContainerEl.classList.add("show-panel");
  };
}
