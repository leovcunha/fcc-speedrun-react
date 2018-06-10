import React from "react";

export default class RecipeModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const recipe = {
            title: this.props.title,
            ingredients: this.props.ingredients.split(","),
            preparation: this.props.preparation
        };
        this.props.saveRecipe(recipe, this.props.index !== -1 ? this.props.index : -1);
    }

    render() {
        return (
            <div className="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="recipeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="recipeModalLabel">New Recipe</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <input className="modal-title form-control" type="text" name="modalTitle" placeholder="Title" value={this.props.title} onChange={this.props.handleInputChange}/>
                                <input className="modal-ing form-control" type="text" name="modalIngredients" placeholder="Ingredients separated by comma" value={this.props.ingredients}
                                    onChange={this.props.handleInputChange}/>
                                <textarea className="modal-prep form-control" type="text" name="modalPreparation" placeholder="Preparation" value={this.props.preparation}
                                    onChange={this.props.handleInputChange}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <input type="submit" className="btn btn-primary" value="Save"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

