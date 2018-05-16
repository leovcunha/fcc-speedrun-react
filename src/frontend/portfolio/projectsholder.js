import React from "react";

import movieRecom from "./img/movie-recom.png";
import webNotes from "./img/web-notes.png";
import tributePage from "./img/tribute-page.png";
import empty from "./img/placeholder.png";

export default function ProjectsHolder() {
    return (
        <div>
            <div className="bg-info row text-white h2 justify-content-center" id="projects" >Portfolio</div>
            <div className="bg-info row">
                <div className="col-sm-6 justify-content-center">
                    <img className="img-fluid w-100 h-auto" src={movieRecom} />
                    <h5 className="font-weight-light text-white">Movie Recommendation</h5>
                    <img className="img-fluid w-100 h-auto" src={tributePage} />
                    <h5 className="font-weight-light text-white">Tribute Page</h5>
                    <img className="img-fluid w-100 h-auto" src={empty} />
                    <h5 className="font-weight-light text-white">Coming soon...=)</h5>
                </div>
                <div className="col-sm-6 justify-content-center">
                    <img className="img-fluid w-100 h-auto" src={webNotes} />
                    <h5 className="font-weight-light text-white">Web Notes</h5>
                    <img className="img-fluid w-100 h-auto" src={empty} />
                    <h5 className="font-weight-light text-white">Coming soon...=)</h5>
                    <img className="img-fluid w-100 h-auto" src={empty} />
                    <h5 className="font-weight-light text-white">Coming soon...=)</h5>
                </div>
            </div>
        </div>
    );
}
