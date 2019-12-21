import React from 'react';
import classes from './GameXO.module.css';
import Board from "./Board/Board";
import useGameLogic from "./useGameLogic";


const GameXO = () => {

    const {board, gameOver, onClick, status, resetGame} = useGameLogic();

    return <div>
        <Board board={board}
               onClick={onClick}
               gameOver={gameOver}
        />
        <div>
            <span>{status}</span>
            {gameOver && <button className={classes.reset} onClick={resetGame}>reset</button>}
        </div>
    </div>
};

export default GameXO;