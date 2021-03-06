
import React from "react";

export default function RecipeCard(props) {
    return (
        <div className="recipecard">
            <div className="card-header" id={`heading${props.index}`}>
                <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${props.index}`} aria-expanded="false" aria-controls={`collapse${props.index}`}>
                        {props.title}
                    </button>
                </h5>
            </div>

            <div id={`collapse${props.index}`} className="collapse" aria-labelledby={`heading${props.index}`} data-parent="#accordionRecipes">
                <div className="card-body">
                    <ul className="list-group">
                        {props.ingredients && props.ingredients.map((ingredient, index) => <li key={index} className="list-group-item">{ingredient}</li>)}
                    </ul>
                    <span className="preparation">{props.preparation}</span>
                    <div className="card-footer">
                        <button type="button" className="btn btn-alert" onClick={() => props.deleteRecipe(props.index)}>Delete</button>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#recipeModal" onClick={() => props.editRecipe(props.index)}>Edit</button>
                    </div>
                </div>
            </div>

        </div>

    );
}

