import React from "react";
import renderer from "react-test-renderer";
import MDPreviewer from "../markdown-previewer";

describe("md-previewer", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<MDPreviewer/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
