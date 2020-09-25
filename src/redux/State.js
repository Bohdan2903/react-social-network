
let state = {
  profilePage : {
    posts : [
    {id: 1, likeCount: 1, message: "hidasdda" },
    {id: 2, likeCount: 2, message: "hello2121331" },
    {id: 3, likeCount: 3, message: "salom1dassadas" },
    {id: 4, likeCount: 4, message: "saljttasdasd" },
    {id: 5, likeCount: 5, message: "privett" },
    {id: 6, likeCount: 6, message: "Katya poka" }, 
  ]},
  dialogsPage : {
    dialogs : [
      { id: 1, name: "Petr" },
      { id: 2, name: "Tolao" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Kostik" },
      { id: 5, name: "Nata" },
      { id: 6, name: "Katya" },
    ],
    messages : [
      { id: 1, message: "hi hello" },
      { id: 2, message: "hi too" },
      { id: 3, message: "heyto" },
      { id: 4, message: "salom" },
      { id: 5, message: "orivet" },
      { id: 6, message: "zdarova" },
    ]
  },
  sideBar : {
    friend: [
      { id: 1, name: "Petr", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'},
      { id: 2, name: "Tolao", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' },
      { id: 3, name: "Sveta", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'}
    ]
  }

};
 export let addPost = (postMessage) => {
  let newPost = {
    id: 1,
    message: postMessage,
    likeCount: 0
  };
  state.profilePage.posts.push(newPost)
}
export default state;