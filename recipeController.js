import Recipe from "../models/Recipe.js";

// Fetch all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("user", "name");
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

// Create a new recipe
export const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({ title, ingredients, instructions, user: req.user });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error adding recipe" });
  }
};
