import axios from "axios"

const API_KEY = "a39b4ce06a23413c989bcdd8e2c68768"
export const getRecipeById = async (id: string) => {
  try {
    const res = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
    return res.data;
  } catch (error) {
    console.log('error', error);

  }
}