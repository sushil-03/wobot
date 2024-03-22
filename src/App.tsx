import { useEffect, useState } from "react";
// import { useEffect } from "react";
import { getRecipe } from "./hooks/getRecipe";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipe().then((res) => {
      setRecipes(res);
    });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="flex flex-wrap items-center justify-center gap-10 py-10">
        {recipes &&
          recipes.map((recipe, index) => {
            return <RecipeCard recipe={recipe} key={index} />;
          })}
      </div>
    </div>
  );
}

export default App;
