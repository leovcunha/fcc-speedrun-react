import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (

        <div className="col-sm-2" id="navbarToggleExternalContent">
            <nav className="nav flex-column" >
                <div className="accordion border border-gray" id="accordionbar">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo">
                                    Frontend
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/tribute-page">Tribute Page</Link>
                            </div>
                        </div>
                        <div id="collapseTwo" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/portfolio">Portfolio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>


    );
}

