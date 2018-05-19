import React from "react";
import renderer from "react-test-renderer";
import LocalWeather from "../local-weather";

describe("tribute-page", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<LocalWeather/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
