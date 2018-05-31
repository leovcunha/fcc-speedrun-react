import React, { Component } from "react";
import axios from "axios";

import "./tictactoe.scss";
import Buttons from "./buttons";
import Board from "./board";

export default class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.gameStart = this.gameStart.bind(this);
        this.markMove = this.markMove.bind(this);
        this.state = {
            board: [["", "", ""],
                ["", "", ""],
                ["", "", ""]],
            playerMark: "X",
            computerMark: "O",
            playerTurn: true,
            gameStarted: false,
            gameEnded: false,
            winner: ""
        };
    }

    gameStart(mark) {
        if (mark === "O") {
            this.setState({
                playerTurn: false, playerMark: "O", computerMark: "X", gameStarted: true
            });
        } else { this.setState({ gameStarted: true }) }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.playerTurn) this.computerMove();
    }

    markMove(x, y) {
        const Turn = this.state.playerTurn;
        console.log(Turn);
        const mark = (Turn ? this.state.playerMark : this.state.computerMark);
        this.setState(prevState => {
            const tempBoard = prevState.board.slice();
            if (tempBoard[x][y] === "") {
                tempBoard[x][y] = mark;
                return ({ board: tempBoard, playerTurn: !Turn });
            }
            return ({ board: tempBoard });
        });
    }
    /**
     * Win: If the player has two in a row, they can place a third to get three in a row.
     * Block: If the opponent has two in a row, the player must play the third themselves to block the opponent
     * Center: A player marks the center. (If it is the first move of the game, playing on a corner gives
     * the second player more opportunities to make a mistake
     * and may therefore be the better choice; however, it makes no difference between perfect players.)
     * Opposite corner: If the opponent is in the corner, the player plays the opposite corner.
     * Empty corner: The player plays in a corner square.
     * Empty side: The player plays in a middle square on any of the 4 sides.
     */
    computerMove() {
        const board = this.state.board.slice();
        let index = -1;

        const teste = this.calculateGameState();

        if (this.state.gameEnded) return false;
        // starter
        if (JSON.stringify(board) === JSON.stringify([["", "", ""], ["", "", ""], ["", "", ""]])) this.markMove(1, 1);
        // it's a draw?
        else if (teste.mod.reduce((accum, curr) => accum + curr) === 48) {
            this.setState({ gameEnded: true, winner: "Draw" });
        // did player win?
        } else if (teste.count.indexOf(-3) !== -1) {
            this.setState({ gameEnded: true, winner: "Player" });
        } else if (teste.count.indexOf(2) !== -1) { // can I win?
            index = teste.count.indexOf(2);
            console.log(index);
            console.log(teste.mod[index]);
            if (index < 3) this.markMove(index, 5 - teste.mod[index]);
            else if (index >= 3 && index < 6) this.markMove(5 - teste.mod[index], index - 3);
            else if (index === 6) this.markMove(5 - teste.mod[index], 5 - teste.mod[index]);
            else if (index === 7) this.markMove(5 - teste.mod[index], teste.mod[index] - 3);
            this.setState({ gameEnded: true, winner: "Computer" });
        } else if (teste.count.indexOf(-2) !== -1) {
            // can opponent win?
            index = teste.count.indexOf(-2);

            if (index < 3) this.markMove(index, 5 - teste.mod[index]);
            else if (index >= 3 && index < 6) this.markMove(5 - teste.mod[index], index - 3);
            else if (index === 6) this.markMove(5 - teste.mod[index], 5 - teste.mod[index]);
            else if (index === 7) this.markMove(5 - teste.mod[index], teste.mod[index] - 3);
        } else if (board[0][0] === "" || board[0][2] === "" || board[2][0] === "" || board[2][2] === "") {
            // Corners first
            let xx = 0;
            let yy = 0;
            while (board[xx][yy] !== "") {
                xx = Math.floor(Math.random() * 2) * 2;
                yy = Math.floor(Math.random() * 2) * 2;
            }
            this.markMove(xx, yy);
        } else if (teste.count.indexOf(1) !== -1 && teste.mod[teste.count.indexOf(1)] < 6) {
            //  rows where have already marked
            index = 0;
            while (teste.mod.indexOf(index) === -1) {
                index += 1;
            }

            if (index < 3) this.markMove(index, 5 - teste.mod[index]);
            else if (index >= 3 && index < 6) this.markMove(5 - teste.mod[index], index - 3);
            else if (index === 6) this.markMove(5 - teste.mod[index], 5 - teste.mod[index]);
            else if (index === 7) this.markMove(5 - teste.mod[index], teste.mod[index] - 3);
        } else if (teste.count.indexOf(0) !== -1) {
            // everything else
            index = teste.count.indexOf(0);

            if (index < 3) this.markMove(index, 5 - teste.mod[index]);
            else if (index >= 3 && index < 6) this.markMove(5 - teste.mod[index], index - 3);
            else if (index === 6) this.markMove(5 - teste.mod[index], 5 - teste.mod[index]);
            else if (index === 7) this.markMove(5 - teste.mod[index], teste.mod[index] - 3);
        }

        return true;
    }
    /**
     *Checks if a given player can win in the next move
     *@param mark is the mark of who is being checked
     *@return count array , every element is the sum of squares, being positive numbers computer mark sum
     * and negative player' marked in each of the 8 possible victory lines starting from the horizontals
     * (elements 0, 1 , 2) then verticals( 3, 4, 5) and diagonals (6, 7)
     */
    calculateGameState() {
        const pl = this.state.playerMark;
        const cmp = this.state.computerMark;
        const board = this.state.board.slice();
        const count = [0, 0, 0, 0, 0, 0, 0, 0];
        const mod = [0, 0, 0, 0, 0, 0, 0, 0];

        for (let x = 0; x <= 2; x += 1) {
            if (board[x][x] === pl) {
                count[6] -= 1;
                mod[6] += (x + 1);
            } else if (board[x][x] === cmp) {
                count[6] += 1;
                mod[6] += (x + 1);
            }
            if (board[x][2 - x] === pl) {
                count[7] -= 1;
                mod[7] += (x + 1);
            } else if (board[x][2 - x] === cmp) {
                count[7] += 1;
                mod[7] += (x + 1);
            }

            for (let y = 0; y <= 2; y += 1) {
                if (board[x][y] === pl) {
                    count[x] -= 1;
                    mod[x] += (y + 1);
                } else if (board[x][y] === cmp) {
                    count[x] += 1;
                    mod[x] += (y + 1);
                }
                if (board[y][x] === pl) {
                    count[x + 3] -= 1;
                    mod[x + 3] += (y + 1);
                } else if (board[y][x] === cmp) {
                    count[x + 3] += 1;
                    mod[x + 3] += (y + 1);
                }
            }
        }
        return { count, mod };
    }
    showEndMessage() {
        return (
            <div className="h1 row justify-content-center"> {this.state.winner === "Draw" ?
                "It's a Draw" : `${this.state.winner} wins!`}</div>
        );
    }
    resetGame() {
        this.setState({
            board: [["", "", ""],
                ["", "", ""],
                ["", "", ""]],
            playerMark: "X",
            computerMark: "O",
            playerTurn: true,
            gameStarted: false,
            gameEnded: false,
            winner: ""
        });
    }

    render() {
        return (
            <div className="tictactoe jumbotron">
                <div className="row h1 justify-content-center">Tic Tac Toe</div>
                <hr className="p-5"/>
                <Buttons gamestarted={this.state.gameStarted} gamestart={this.gameStart}/>
                { this.state.gameEnded && this.showEndMessage()}
                {this.state.gameStarted && <Board markMove={this.markMove} board={this.state.board}/>}
                {this.state.gameEnded && <div className="row justify-content-center">
                    <button className="btn btn-primary" onClick={() => this.resetGame()}>Play Again?</button>
                </div>
                }

            </div>
        );
    }
}
