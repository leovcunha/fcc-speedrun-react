import React from "react";

import movieRecom from "./img/movie-recom.png";
import webNotes from "./img/web-notes.png";
import tributePage from "./img/tribute-page.png";
import empty from "./img/placeholder.png";

export default function ProjectsHolder() {
    return (
            <div className="row flex-wrap">
                    <img className="w-50 h-50 p-3" src={movieRecom} />
                    <img className="w-50 h-50 p-3" src={webNotes} />
                    <img className="w-50 h-50 p-3" src={tributePage} />
                    <img className="w-50 h-50 p-3" src={empty} />
                    <img className="w-50 h-50 p-3" src={empty} />
                    <img className="w-50 h-50 p-3" src={empty} />
            </div>
    );
}
