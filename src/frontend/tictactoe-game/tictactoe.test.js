import React from "react";
import renderer from "react-test-renderer";
import TicTacToe from "../tictactoe-game";

describe("tictactoe", () => {
    it("renders without crashing", () => {
        const component = renderer.create(<TicTacToe/>).toJSON();
        expect(component).toMatchSnapshot();
    });
});
