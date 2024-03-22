import axios from "axios"

const API_KEY = "f95ca11cd0b2487e8e15302520d6ef95"
export const getRecipe = async () => {
  try {
    const res = await axios.get(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${API_KEY}&search=Berry`)
    console.log('resp', res);

    return res.data.recipes;
  } catch (error) {
    console.log('error', error);

  }
}