const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE= 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Petr"},
        {id: 2, name: "Tolao"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Kostik"},
        {id: 5, name: "Nata"},
        {id: 6, name: "Katya"},
    ],
    messages: [
        {id: 1, message: "hi hello"},
        {id: 2, message: "hi too"},
        {id: 3, message: "heyto"},
        {id: 4, message: "salom"},
        {id: 5, message: "orivet"},
        {id: 6, message: ""},
    ],
    newMessageBody: '',
};
const dialogsReducer = (state = initialState, action) => {
    console.log(action.type, '11')
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id:6, message: body}]
            };
        }

        default: return state;
    }
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    };
};
export default dialogsReducer;