import { useState, useEffect } from "react";
import axios from "axios";

const Recipes = () => {
  const foodCategories = [
    "APPETIZER",
    "BREAKFAST",
    "MAIN",
    "DESSERT",
    "SALAD",
    "SIDES",
    "SHAKES",
  ];

  const colors = [
    "#ff5733",
    "#33ff57",
    "#5733ff",
    "#ff3366",
    "#33ccff",
    "#ffff33",
    "#aaff33",
  ];

  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes")
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log("Error getting data doctors", err);
      });
  }, []);

  const handleFilterCategory = (category) => {
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.food_category.toUpperCase() === category
    );
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <>
      <section>
        <div className="title flex justify-center items-center text-5xl font-bold p-4">
          Recipes
        </div>
        <div className="container_category flex justify-center items-center">
          <div className="foodCategory flex justify-between items-center  md:w-3/5 w-full py-4 text-xs md:text-l">
            {foodCategories.map((category, index) => (
              <div
                key={index}
                className="md:w-32 w-20 category_title border md:px-2 px-1 py-4 text-white font-bold radius-full rounded-2xl text-center cursor-pointer"
                style={{ backgroundColor: colors[index] }}
                onClick={() => handleFilterCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="clicked_recipe_container w-full flex justify-normal items-center">
          {error ? (
            <div>Error: {error}</div>
          ) : filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) => (
              <div className="filtered_click" key={index}>
                {/* Ensure the path to the image is correct */}
                <img src={`server/Images/${recipe.image}`} alt={recipe.name} />

                <div>{recipe.name}</div>
              </div>
            ))
          ) : (
            <div>No Recipes Found</div>
          )}
        </div>
      </section>
    </>
  );
};

export default Recipes;
