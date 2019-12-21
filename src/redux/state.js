import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 234,
                    text: 'Honda Civic VI',
                    imageUrl: 'https://a.d-cd.net/ca7c0bcs-960.jpg',
                    countLikes: 17
                },
                {
                    id: 345,
                    text: 'Honda Civic VII Type-R',
                    imageUrl: 'http://otzyvy-avtovladelcev.ru/img/auto-body-image/3214/48814.jpg',
                    countLikes: 25
                }
            ],
            newPostText: '',
            newPostImage: ''
        },
        dialogsPage: {
            interlocutors: [
                {name: 'Коля', id: 12345},
                {name: 'Дима', id: 74629},
                {name: 'Антон', id: 10956},
                {name: 'Никита', id: 59781},
                {name: 'Тимофей', id: 34287}
            ],
            messages: {
                59781: [
                    {id: 12345, name: 'Никита', message: 'Привет'},
                    {id: 12345, name: 'Никита', message: 'Как дела'},
                    {id: 12345, name: 'Никита', message: 'блааблаблабла'},
                    {id: 12345, name: 'Никита', message: 'траляля'},
                    {id: 12345, name: 'Никита', message: 'ххахаха)))'},
                ],
                34287: [
                    {id: 12345, name: 'Тимофей', message: 'Привет'},
                    {id: 12345, name: 'Тимофей', message: 'Как дела'},
                    {id: 12345, name: 'Тимофей', message: 'блааблаблабла'},
                    {id: 12345, name: 'Тимофей', message: 'траляля'},
                    {id: 12345, name: 'Тимофей', message: 'ххахаха)))'},
                ]
            },
            newMessageText: ''
        }
    },

    getState() {
        return this._state;
    },

    observer() {
        console.log('No observer');
    },

    subscribe(observer) {
        this.observer = observer;
    },

    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);

        this.observer();
    }
};

export default store;