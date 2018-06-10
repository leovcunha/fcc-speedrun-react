import React from "react";
import renderer from "react-test-renderer";
import RecipeBox from "../recipe-box";

describe("recipe box", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<RecipeBox/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
