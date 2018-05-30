import React, { Component } from "react";
import axios from "axios";

import "./tictactoe.scss";
import Buttons from "./buttons"
import Board from "./board"

export default class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.gameStart = this.gameStart.bind(this)
        this.markMove = this.markMove.bind(this)
        this.state = {
            board: [['', '', '']
                   ,['', '', ''],
                    ['', '', '']],
            playerMark: 'X',
            computerMark:'O',
            playerTurn: true,
            gameStarted: false,
        };
    }

    gameStart(mark) {
        console.log("button clicked")
        if (mark === 'O')
            this.setState({ playerTurn: false, playerMark: 'O', computerMark: 'X', gameStarted: true });
        else
            this.setState({ gameStarted: true});
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.playerTurn) this.computerMove();
    }

    markMove(x,y) {
        const Turn = this.state.playerTurn;
        console.log(Turn);
        const mark = (Turn? this.state.playerMark: this.state.computerMark);
        this.setState(prevState => {
            const tempBoard = prevState.board.slice();
            tempBoard[x][y] = mark;
            return ({ board: tempBoard, playerTurn: !Turn });
        });

    }
    /**
     * Win: If the player has two in a row, they can place a third to get three in a row.
     * Block: If the opponent has two in a row, the player must play the third themselves to block the opponent
     * Fork: Create an opportunity where the player has two threats to win (two non-blocked lines of 2).
     * Blocking an opponent's fork: If there is only one possible fork for the opponent, the player should block it.
     * Otherwise, the player should block any forks in any way that simultaneously allows them to create two in a row.
     * Otherwise, the player should create a two in a row to force the opponent into defending, as long as it doesn't result in them creating a fork.
     * For example, if "X" has two opposite corners and "O" has the center, "O" must not play a corner in order to win.
     * (Playing a corner in this scenario creates a fork for "X" to win.)
     * Center: A player marks the center. (If it is the first move of the game, playing on a corner gives the second player more opportunities to make a mistake
     * and may therefore be the better choice; however, it makes no difference between perfect players.)
     * Opposite corner: If the opponent is in the corner, the player plays the opposite corner.
     * Empty corner: The player plays in a corner square.
     * Empty side: The player plays in a middle square on any of the 4 sides.
     */
    computerMove() {
        const board = this.state.board;
        // starters
        if (JSON.stringify(board) == JSON.stringify([['', '', ''],['', '', ''],['', '', '']])) this.markMove(1,1);
        if (JSON.stringify(board) === JSON.stringify([['', '', ''],['', 'X', ''],['', '', '']])) {
            this.markMove(Math.floor(Math.random() * 2)*2, Math.floor(Math.random() * 2)*2);
        }
    }
    /**
     *check if a given player can win in the next move
     *@param mark is the mark of who is being checked
     */
    checkPossibleWin(mark) {}

    /**
     *check if a given player can make a fork in the next move
     *@param mark is the mark of who is being checked
     */
    checkPossibleFork(mark) {}

    render() {
        return (
            <div className="tictactoe jumbotron">
                <div className="row h1 justify-content-center">Tic Tac Toe</div>
                <hr className="p-5"/>
                <Buttons gamestarted={this.state.gameStarted} gamestart={this.gameStart}/>
                {this.state.gameStarted && <Board markMove={this.markMove} board={this.state.board}/>}


            </div>
        );
    }
}
