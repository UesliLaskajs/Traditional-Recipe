const Recipe = require("../models/Recipe.model");

exports.getAllRecipes = async (req, res) => {
    try {
        const allRecipes = await Recipe.find();
        res.status(200).json(allRecipes);
    } catch (err) {
        res.status(500).json({ error: "Error retrieving recipes", details: err });
    }
};

exports.createRecipe = async (req, res) => {
    try {
        const { name, food_category, time, about, range, instruction } = req.body;

        // Check if a file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: "No image file uploaded" });
        }

        const image = req.file.filename;

        const newRecipe = new Recipe({
            name,
            food_category,
            time,
            about,
            range,
            instruction,
            image
        });

        const recipe = await newRecipe.save();
        res.status(201).json({ message: "Recipe successfully created!", recipe });
    } catch (err) {
        if (err.name === 'ValidationError') {
            res.status(400).json({ error: "Validation error", details: err.message });
        } else {
            res.status(500).json({ error: "Error creating recipe", details: err.message });
        }
    }
};
