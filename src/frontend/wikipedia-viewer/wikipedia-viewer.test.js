import React from "react";
import renderer from "react-test-renderer";
import WikipediaViewer from "../wikipedia-viewer";

describe("wikipedia-viewer", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<WikipediaViewer/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
