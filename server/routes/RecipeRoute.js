const express = require("express");
const router = express.Router();
const path = require('path');

const multer = require("multer");
const { getAllRecipes, createRecipe } = require("../controllers/Recipe.controllers");

// Multer configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../Images")); // Destination folder for storing uploaded files
    },
    filename: function(req, file, cb) { 
        cb(null, Date.now() + '-' + file.originalname); // Generating a unique filename for the uploaded file
    }
});

const upload = multer({ storage: storage });

// Define route handlers
router.get("/recipes", getAllRecipes);
router.post("/create-recipe", upload.single('image'), createRecipe); // Use upload middleware for handling file upload

module.exports = router;
