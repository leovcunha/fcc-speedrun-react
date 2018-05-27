import React from "react";
import renderer from "react-test-renderer";
import Pomodoro from "../pomodoro-clock";

describe("pomodoro", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<Pomodoro/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
