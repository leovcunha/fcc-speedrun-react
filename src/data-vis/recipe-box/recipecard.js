
import React from "react";

export default function RecipeCard(props) {

    const ingredients = props.ingredients && props.ingredients.map((ingredient, index) => <li key={index} className="list-group-item">{ingredient}</li>);

    return (
        <div className="recipecard">
            <div className="card-header" id={`heading${props.key}`}>
              <h5 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${props.key}`} aria-expanded="false" aria-controls={`collapse${props.key}`}>
                  {props.title}
                </button>
              </h5>
            </div>

            <div id={`collapse${props.key}`} className="collapse" aria-labelledby={`heading${props.key}`} data-parent="#accordionRecipes">
              <div className="card-body">
                <ul className="list-group">
                  {ingredients}
                </ul>
                {props.preparation}
              </div>
            </div>
       </div>

    );
}

