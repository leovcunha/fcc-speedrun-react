import React, { Component } from "react";
import axios from "axios";
import RecipeCard from "./recipecard";
import RecipeModal from "./recipemodal"
import "./recipe-box.scss";

const SAMPLE_RECIPE = [
    {
        title: "Grilled Cauliflower",
        ingredients: ["1 head cauliflower", "1 tablespoon olive oil", "1 tablespoon brown sugar", "2 teaspoons seasoned salt"],
        preparation: `Preheat an outdoor grill for medium-high heat and lightly oil the grate.
                      Sprinkle cauliflower slices on both sides with olive oil, brown sugar, and seasoned salt.
                      Cook cauliflower on the grill until char marks appear, 2 to 3 minutes per side. Transfer to a grill-safe pan with
                      a lid, cover, and continue cooking on grill until tender, about 20 minutes.`
    },
    {}

    ];

export default class RecipeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        this.getCachedRecipes();
    }

    componentWillUnmount() {
        this.saveRecipestoCache();
    }

    getCachedRecipes() {
        const RecipesData = localStorage.getItem("recipes");
        if (RecipesData) {
            this.setState({ recipes: JSON.parse(RecipesData) });
        } else {
            this.setState({ recipes: SAMPLE_RECIPE });
        }

    }

    saveRecipestoCache() {
        localStorage.setItem("recipesData", JSON.stringify(this.state.recipes));
    }

    mapRecipes() {
        if (this.state.recipes) {
            this.state.recipes.map((recipe, index) => <RecipeCard key={index} title={recipe.title} ingredients={recipe.ingredients}
                preparation={recipe.preparation}/>);
        }
    }

    render() {
        console.log(this.state.recipes);
        return (
            <div className="recipe-box jumbotron">
                <div className="row h1 justify-content-center">Recipe Box</div>
                <hr className="p-3"/>
                <div className="accordion" id="accordionRecipes">
                    {this.mapRecipes()}
                </div>
                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#recipeModal">New Recipe</button>
                <RecipeModal />
            </div>
        );
    }
}