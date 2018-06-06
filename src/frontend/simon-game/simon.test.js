import React from "react";
import renderer from "react-test-renderer";
import Simon from "../simon-game";

describe("simon", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<Simon/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
