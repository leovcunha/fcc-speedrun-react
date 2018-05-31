import React from "react";

export default function Board(props) {
    return (
        <div className="gameboard row justify-content-center">
            <table>
                <tbody>
                    <tr>
                        <td onClick={() => props.markMove(0, 0)}>{props.board[0][0]}</td>
                        <td onClick={() => props.markMove(0, 1)}>{props.board[0][1]}</td>
                        <td onClick={() => props.markMove(0, 2)}>{props.board[0][2]}</td>

                    </tr>
                    <tr>
                        <td onClick={() => props.markMove(1, 0)}>{props.board[1][0]}</td>
                        <td onClick={() => props.markMove(1, 1)}>{props.board[1][1]}</td>
                        <td onClick={() => props.markMove(1, 2)}>{props.board[1][2]}</td>

                    </tr>
                    <tr>
                        <td onClick={() => props.markMove(2, 0)}>{props.board[2][0]}</td>
                        <td onClick={() => props.markMove(2, 1)}>{props.board[2][1]}</td>
                        <td onClick={() => props.markMove(2, 2)}>{props.board[2][2]}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
}
