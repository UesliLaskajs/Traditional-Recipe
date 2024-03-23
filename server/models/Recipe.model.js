const mongoose = require("mongoose");

const FoodCategory = ["appetizer", "breakfast", "main", "dessert", "salad", "sides", "shakes"];

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Please provide a unique recipe name"]
    },
    food_category: { 
        type: String,
        enum: FoodCategory, 
        default: "main",
        required: [true, "Please select the category of the dish"]
    },
    time: {
        type: Number,
        required: [true, "Enter the required time it needs to cook in minutes"] 
    },
    about: {
        type: String,
        required: [true, "Please write something about your recipe"]
    },
    range: {
        type: String, 
        validate: {
            validator: function(v) {
                return /^\d{1,2}-\d{1,2}$/.test(v);
            },
            message: props => `${props.value} is not a valid range Format. Please use format like "8-10" or "3-4".` 
        },
        required: [true, 'Range is required']
    },
    instruction: {
        type: String,
        required: [true, "Please write instructions about your recipe"]
    },
    image: {
        type: String, // This could be the path to the uploaded file
        required: [true, "Please provide an image for the recipe"]
    }
},{timestamps:new Date});

module.exports = mongoose.model("Recipe", RecipeSchema);
