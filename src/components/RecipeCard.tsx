import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SiCodechef } from "react-icons/si";
import { CiTimer } from "react-icons/ci";
import { RiMoneyPoundCircleLine } from "react-icons/ri";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RecipeCard = ({ recipe }: { recipe: any }) => {
  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="w-64 overflow-hidden bg-white rounded-md h-[21rem] md:w-80 hover:shadow-[0_0px_70px_20px_rgba(255,255,255,0.2)]"
    >
      <div className="relative overflow-hidden">
        {recipe.image ? (
          <img src={recipe.image} alt="image" className="w-full" />
        ) : (
          <div className="h-[215px] bg-gray-200 w-80">{""}</div>
        )}
        <div className="absolute top-2 right-3">
          <FaHeart
            className="text-red-700 transition-colors duration-500 ease-in-out bg-transparent "
            size={28}
          />
          {/* right-[8px] */}
          <span className="absolute text-[8px] top-[7px] text-white  left-1/2 transform -translate-x-1/2">
            {recipe.aggregateLikes}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex gap-2">
          <SiCodechef />
          <p className="text-sm font-semibold">
            {recipe.title.length > 30
              ? recipe.title.slice(0, 30).concat("...")
              : recipe.title}
          </p>
        </div>
        <div className="flex justify-between gap-2 mt-3">
          <div className="flex items-center gap-1">
            <CiTimer />
            <span className="text-sm">{recipe.readyInMinutes}min</span>
          </div>
          <div className="flex items-center gap-1">
            <RiMoneyPoundCircleLine />
            <span className="text-sm">{recipe.pricePerServing}</span>
          </div>
        </div>
        <div>
          <button className="w-full py-2 mt-4 text-white bg-blue-800 rounded-t-xl">
            Read More
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
