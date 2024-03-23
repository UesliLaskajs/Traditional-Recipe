import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import About from "../Pages/About";
import CreateRecipe from "../Pages/CreateRecipes";
const RouterLinks = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/create-recipe" element={<CreateRecipe/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterLinks;
