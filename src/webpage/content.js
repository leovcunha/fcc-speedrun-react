import React from "react";
import { Switch, Route } from "react-router-dom";
import TributePage from "../frontend/tribute-page";
import Portfolio from "../frontend/portfolio";
import RandomQuoteMachine from "../frontend/random-quote-machine";
import LocalWeather from "../frontend/local-weather";
import WikipediaViewer from "../frontend/wikipedia-viewer";
import Home from "./home";
import TwitchClient from "../frontend/twitch-client";
import Calculator from "../frontend/calculator";
import Pomodoro from "../frontend/pomodoro-clock";
import TicTacToe from "../frontend/tictactoe-game";
import SimonGame from "../frontend/simon-game";
import MDPreviewer from "../data-vis/markdown-previewer";

export default function Content(props) {
    return (
        <main className="container-fluid col-sm-10">
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/tribute-page' component={TributePage}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route path='/random-quote-machine' component={RandomQuoteMachine}/>
                <Route path='/local-weather' component={LocalWeather}/>
                <Route path='/wikipedia-viewer' component={WikipediaViewer}/>
                <Route path='/twitch-client' component={TwitchClient}/>
                <Route path='/calculator' component={Calculator}/>
                <Route path='/pomodoro' component={Pomodoro}/>
                <Route path='/tictactoe' component={TicTacToe}/>
                <Route path='/simon' component={SimonGame}/>
                <Route path='/md-previewer' component={MDPreviewer}/>
            </Switch>
        </main>
    );
}

