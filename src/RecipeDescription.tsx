import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "./hooks/getRecipeById";
import { CiTimer } from "react-icons/ci";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
type RecipeDescriptionProps = {
  image: string | undefined;
  title: string;
  summary: string;
  diets: [string];
  dishTypes: [string];
  instructions: string;
  readyInMinutes: string;
  pricePerServing: string;
  aggregateLikes: string;
};

const RecipeDescription = () => {
  const [recipe, setRecipe] = useState<RecipeDescriptionProps>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getRecipeById(id).then((res) => {
        setRecipe(res);
      });
    }
  }, [id]);
  if (!id) return <div></div>;
  if (!recipe) {
    return <div></div>;
  }
  const theObj = { __html: recipe.summary };
  const instruction = { __html: recipe.instructions };

  // Access elements in the fragment
  return (
    <div className="min-h-screen px-2 py-4 text-white bg-black md:px-8 sm:px-4 md:pt-8 text-wite">
      <div className="flex flex-col w-full gap-10 md:flex-row">
        <div className="w-full md:w-1/2">
          {recipe.image && <img src={recipe.image} />}
          <div>
            <div className="flex justify-between gap-2 mt-3">
              <div className="flex items-center gap-1">
                <CiTimer />
                <span className="text-sm">{recipe.readyInMinutes}min</span>
              </div>
              <div className="flex items-center gap-1">
                <RiMoneyPoundCircleLine />
                <span className="text-sm">{recipe.pricePerServing}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaHeart />
                <span className="text-sm">{recipe.aggregateLikes}</span>
              </div>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={theObj}
            className="mt-4 text-xs text-gray-400 sm:text-sm md:text-base"
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="">
            <p className="text-sm font-semibold md:text-lg sm:text-base">
              {recipe.title}
            </p>
            <div className="flex gap-2 mt-1">
              Type:{" "}
              <div>
                {recipe.dishTypes.map((dish: string, index) => {
                  return (
                    <span key={index} className="capitalize">
                      {dish}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            {recipe.diets.map((diet, index: number) => {
              return (
                <div
                  key={index}
                  className="px-1 py-1 text-sm capitalize border border-gray-500 md:px-3 md:py-2 md:text-base"
                >
                  {diet}
                </div>
              );
            })}
          </div>
          <div>
            <p>Instructions</p>
            <div
              dangerouslySetInnerHTML={instruction}
              className="text-xs text-gray-400 sm:text-sm md:text-sm"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default RecipeDescription;
