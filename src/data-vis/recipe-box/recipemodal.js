import React from "react";

export default class RecipeModal extends React.Component {
  constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.title.value + this.ingredients.value + this.preparation.value)
    const recipe = {
      title: this.title.value,
      ingredients: JSON.parse("[" + this.ingredients.value + "]"),
      preparation: this.preparation.value
    };
    this.props.saveNewRecipe(recipe);

  }

    render() {
      return (
        <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="recipeModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="recipeModalLabel">New Recipe</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="modal-body">
                  <input className="form-control" type="text" placeholder="Title" ref={(input) => this.title = input} />
                  <input className="form-control" type="text" placeholder="Ingredients separated by comma" ref={(input) => this.ingredients = input} />
                  <input className="form-control" type="text" placeholder="Preparation" ref={(input) => this.preparation = input} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <input type="submit" className="btn btn-primary" value="Save"/>
                </div>
              </form>
            </div>
          </div>
        </div>

    )};
}

