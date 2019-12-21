import {useState, useEffect} from 'react';


function useGameLogic() {
    const [state, setState] = useState({
        status: 'Ход игрока X',
        gameOver: false,
        moveTo: 'X',
        board: Array(9).fill(null)
    });

    useEffect(() => {
        if (!state.gameOver) {
            chekBoard();
        }
    });

    const chekBoard = () => {
        const winner = defineWinner();
        if (winner) {
            setGameOver(winner);
        } else if (!state.board.includes(null)) {
            setGameOver('Ничья...');
        } else if (state.moveTo === 'O') {
            moveComp();
        }
    };

    const resetGame = () => {
        setState({
            status: 'Ход игрока X',
            gameOver: false,
            reset: true,
            moveTo: 'X',
            board: Array(9).fill(null)
        });
    };

    const setGameOver = (status) => {
        setState(prevState =>({
            ...prevState,
            status: status,
            gameOver: true
        }));
    };

    const toggleMoveTo = () => {
        setState(prevState => ({
            ...prevState,
            moveTo: state.moveTo === 'X' ? 'O' : 'X'
        }));
    };

    const onClick = (i) => {
        if (!state.board[i]) {
            setState(prevState => ({
                ...prevState,
                board: state.board.map((value, index) => {
                    if (index === i) {
                        return state.moveTo;
                    }
                    else {
                        return value;
                    }
                })
            }));
            toggleMoveTo();
        }
    };

    const moveComp = () => {

        while (true) {
            let indexMove = Math.round(((Math.trunc(Math.random() * 100)) / 100) * 8);

            if (!state.board[indexMove]) {
                setState(prevState => ({
                    ...prevState,
                    board: state.board.map((value, index) => {
                        if (index === indexMove) {
                            return state.moveTo;
                        }
                        else {
                            return value;
                        }
                    })
                }));
                break;
            }
        }
        toggleMoveTo();
    };

    const defineWinner = () => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (let line of lines) {
            if(state.board[line[0]] && state.board[line[0]] === state.board[line[1]] && state.board[line[0]] === state.board[line[2]]) {
                return `Winner player ${state.board[line[0]]}`;
            }
        }
        return null;
    };

    return {
        board: state.board,
        gameOver: state.gameOver,
        onClick,
        status: state.status,
        resetGame
    };
}

export default useGameLogic;