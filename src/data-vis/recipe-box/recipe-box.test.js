import React from "react";
import renderer from "react-test-renderer";
import TwitchClient from "../twitch-client";

describe("twitch client", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<TwitchClient/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
