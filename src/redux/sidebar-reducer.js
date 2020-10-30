
let initialState = {
    friend: [
        {id: 1, name: "Petr", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'},
        {id: 2, name: "Tolao", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'},
        {id: 3, name: "Sveta", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'}
    ]
};
const sidebarReducer = (state = initialState, action) => {
    return state;
};
export default sidebarReducer;