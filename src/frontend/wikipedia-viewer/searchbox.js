import React from "react";

export default function SearchBox(props) {
    return (
        <form className="form-inline justify-content-center" onSubmit={props.handleSubmit}>
            <div className="form-group mx-sm-3 mb-5">
                <input type="search" className="form-control" id="inputSearch" value={props.keyword}
                    onChange={(e) => props.handleChange(e.target.value)} placeholder="Search Wikipedia"/>
            </div>
            <button type="submit" className="btn btn-secondary mb-5">Search</button>
            <button className="btn btn-secondary ml-2 mb-5" onClick={props.randomArticle}>Random Article</button>
        </form>

    );
}

