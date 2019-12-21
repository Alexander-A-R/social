import React from 'react';
import classes from './Board.module.css';
import Square from '../Square/Square';


const Board = ({board, onClick, gameOver}) => {

    return <div>
        <div className={classes.row}>
            <Square value={board[0]} onClick={() => onClick(0)} disabled={gameOver} />
            <Square value={board[1]} onClick={() => onClick(1)} disabled={gameOver} />
            <Square value={board[2]} onClick={() => onClick(2)} disabled={gameOver} />
        </div>
        <div className={classes.row}>
            <Square value={board[3]} onClick={() => onClick(3)} disabled={gameOver} />
            <Square value={board[4]} onClick={() => onClick(4)} disabled={gameOver} />
            <Square value={board[5]} onClick={() => onClick(5)} disabled={gameOver} />
        </div>
        <div className={classes.row}>
            <Square value={board[6]} onClick={() => onClick(6)} disabled={gameOver} />
            <Square value={board[7]} onClick={() => onClick(7)} disabled={gameOver} />
            <Square value={board[8]} onClick={() => onClick(8)} disabled={gameOver} />
        </div>
    </div>
};

export default Board;