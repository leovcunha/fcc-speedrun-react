import React from "react";
import renderer from "react-test-renderer";
import TicTacToe from "../tictactoe-game";

describe("simon", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<Simon/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
