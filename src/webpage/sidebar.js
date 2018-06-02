import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (

        <div className="col-sm-2 flex-column" id="navbarToggleExternalContent">
            <nav className="nav flex-column" >
                <div className="accordion border border-gray" id="accordionbar">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false"
                                    aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix collapseSeven collapseEight
                                    collapseNine collapseTen">
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
                        <div id="collapseThree" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/random-quote-machine">Random Quote Machine</Link>
                            </div>
                        </div>
                        <div id="collapseFour" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/local-weather">Local Weather</Link>
                            </div>
                        </div>
                        <div id="collapseFive" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/wikipedia-viewer">Wikipedia Viewer</Link>
                            </div>
                        </div>
                        <div id="collapseSix" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/twitch-client">Twitch.tv JSON Api</Link>
                            </div>
                        </div>
                        <div id="collapseSeven" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/calculator">Calculator</Link>
                            </div>
                        </div>
                        <div id="collapseEight" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/pomodoro">Pomodoro Clock</Link>
                            </div>
                        </div>
                        <div id="collapseNine" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/tictactoe">Tic Tac Toe</Link>
                            </div>
                        </div>
                        <div id="collapseTen" className="collapse multi-collapse" aria-labelledby="headingOne" data-parent="#accordionbar">
                            <div className="card-body">
                                <Link to="/simon">Simon Game</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>


    );
}

