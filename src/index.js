import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const DataDialogs = React.createContext({
    interlocutors: [
        {name: 'Коля', id: 12345},
        {name: 'Дима', id: 74629},
        {name: 'Антон', id: 10956},
        {name: 'Никита', id: 59781},
        {name: 'Тимофей', id: 34287}
        ],
    messages: [
        {id: 12345, name: 'Никита', message: 'Привет'},
        {id: 12345, name: 'Никита', message: 'Как дела'},
        {id: 12345, name: 'Никита', message: 'блааблаблабла'},
        {id: 12345, name: 'Никита', message: 'траляля'},
        {id: 12345, name: 'Никита', message: 'ххахаха)))'},
    ]
});

ReactDOM.render(<App />, document.getElementById('root'));