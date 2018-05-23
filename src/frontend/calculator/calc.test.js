import React from "react";
import renderer from "react-test-renderer";
import Calculator from "../calculator";

describe("calculator", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<Calculator/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
