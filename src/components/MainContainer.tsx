import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import RecipeDescription from "../RecipeDescription";

const MainContainer = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recipe/:id" element={<RecipeDescription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;
