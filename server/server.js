const express = require("express");
const mongooseConnection = require("./config/mongoose.connection");
const recipeRoute = require("./routes/RecipeRoute");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the Images directory
app.use(express.static(path.join(__dirname, "Images")));

// Mount the recipe routes
app.use("/", recipeRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
