const SEND_MESSAGE = 'SEND-MESSAGE';


export const sendMessage = message => ({type: SEND_MESSAGE, message});

const initialState = {
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
        ],
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            const message = {
                id: 12345,
                name: 'Я',
                message: action.message
            };
            return {
                ...state,
                messages: [...state.messages, {...message}]
            };
        default:
            return state;
    }
};

export default dialogsReducer;