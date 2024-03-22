import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-end justify-between px-10 py-5 text-white bg-black">
      <Link to="/" className="text-2xl md:text-4xl sm:text-3xl">
        RecipeBook
      </Link>
      <div className="flex gap-4 md:gap-8">
        <Link
          to="/"
          className="pb-1 text-sm transition-all duration-300 ease-in-out border-b-2 border-transparent md:text-md hover:text-purple-400 hover:border-purple-400"
        >
          About{" "}
        </Link>
        <Link
          to="/"
          className="pb-1 text-sm transition-all duration-300 ease-in-out border-b-2 border-transparent md:text-md hover:text-purple-400 hover:border-purple-400"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
