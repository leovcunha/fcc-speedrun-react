import React, { Component } from "react";
import axios from "axios";
import TwitchCard from "./twitchcard";
import "./twitch-client.scss";

const API = "https://wind-bow.glitch.me/twitch-api/";
const STREAMERS = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

export default class TwitchClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            streamers: []
        };
    }
    componentDidMount() {
        this.getUsersData();
    }

    getUsersData() {
        const usersArray = Promise.all(STREAMERS.map(user => axios.get(`${API}channels/${user}`)));
        const streamsArray = Promise.all(STREAMERS.map(user => axios.get(`${API}streams/${user}`)));
        streamsArray.then(streams => {
            usersArray
                .then(users => users.map((user, stream) => Object.assign(user, streams[stream].data)))
                .then(users => this.setState({ streamers: users }));
        });
        return true;
    }

    mapUsersData() {
        return this.state.streamers.map(user => <TwitchCard key={user.data.id} name={user.data.display_name}
            logo={user.data.logo} url={user.data.url} status={user.data.status} stream={user.stream}/>);
    }

    render() {
        console.log(this.state.streamers);
        return (
            <div className="twitch-client jumbotron">
                <div className="row h1 justify-content-center">Twitch Client</div>
                <hr className="p-5"/>
                {this.mapUsersData()}

            </div>
        );
    }
}
