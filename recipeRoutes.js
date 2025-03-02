import express from "express";
import { getRecipes, addRecipe } from "../controllers/recipeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route to get all recipes
router.get("/", getRecipes);

// Protected route to add a recipe (only for logged-in users)
router.post("/", protect, addRecipe);

export default router;
