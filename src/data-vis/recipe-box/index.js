import React, { Component } from "react";
import axios from "axios";
import RecipeCard from "./recipecard";
import RecipeModal from "./recipemodal";
import "./recipe-box.scss";


export default class RecipeBox extends Component {
    constructor(props) {
        super(props);
        this.saveRecipe = this.saveRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            recipes: [
                {
                    title: "Grilled Cauliflower",
                    ingredients: ["1 head cauliflower", "1 tablespoon olive oil", "1 tablespoon brown sugar", "2 teaspoons seasoned salt"],
                    preparation: `Preheat an outdoor grill for medium-high heat and lightly oil the grate.
                                  Sprinkle cauliflower slices on both sides with olive oil, brown sugar, and seasoned salt.
                                  Cook cauliflower on the grill until char marks appear, 2 to 3 minutes per side. Transfer to a grill-safe pan with
                                  a lid, cover, and continue cooking on grill until tender, about 20 minutes.`
                },
            ],

            modalTitle: "",
            modalIngredients: "",
            modalPreparation: "",
            modalIndex: -1

        };
    }
    componentDidMount() {
        this.getCachedRecipes();
    }

    componentDidUpdate() {
        this.saveRecipestoCache();
    }

    getCachedRecipes() {
        const RecipesData = localStorage.getItem("recipes");
        if (RecipesData !== "[]" && RecipesData !== null) {
            this.setState({ recipes: JSON.parse(RecipesData) });
        }
    }

    saveRecipe(recipe, index = -1) {
        const recs = this.state.recipes.slice();
        if (index === -1) { // new
            recs.push(recipe);
        } else {
            recs[index] = recipe;
        }
        this.setState({
            recipes: recs,
            modalIngredients: "",
            modalPreparation: "",
            modalTitle: "",
            modalIndex: -1
        });
    }

    saveRecipestoCache() {
        localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
    }

    handleInputChange(event) {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }

    deleteRecipe(i) {
        console.log(i);
        const recs = this.state.recipes.slice();
        console.log(recs);
        recs.splice(i, 1);
        console.log(recs);
        this.setState({ recipes: recs });
    }
    editRecipe(i) {
        const rec = this.state.recipes[i];
        this.setState({
            modalIngredients: rec.ingredients.join(),
            modalPreparation: rec.preparation,
            modalTitle: rec.title,
            modalIndex: i
        });
    }

    newRecipe() {
        this.setState({
            modalIngredients: "",
            modalPreparation: "",
            modalTitle: "",
            modalIndex: -1
        });
    }

    render() {
        return (
            <div className="recipe-box jumbotron">
                <div className="row h1 justify-content-center">Recipe Box</div>
                <hr className="p-3"/>
                <div className="accordion" id="accordionRecipes">
                    {this.state.recipes.map((recipe, index) => <RecipeCard key={index} index={index} title={recipe.title} ingredients={recipe.ingredients}
                        preparation={recipe.preparation} deleteRecipe={this.deleteRecipe} editRecipe={this.editRecipe}/>)}
                </div>
                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#recipeModal" onClick={() => this.newRecipe()}>New Recipe</button>
                <RecipeModal index={this.state.modalIndex} title={this.state.modalTitle} ingredients={this.state.modalIngredients} preparation={this.state.modalPreparation} saveRecipe={this.saveRecipe} handleInputChange={this.handleInputChange}/>

            </div>
        );
    }
}
