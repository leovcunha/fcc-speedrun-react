import React from "react";
import renderer from "react-test-renderer";
import RandomQuoteMachine from "../random-quote-machine";

describe("tribute-page", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<RandomQuoteMachine/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
