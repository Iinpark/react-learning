const WHILE_POST_INPUTTING = "WHILE_POST_INPUTTING";
const ADD_POST = "ADD_POST";

let initialState = {
  PostsBase: [
    {
      PostAvatar:
        "https://im0-tub-kz.yandex.net/i?id=080351a460cf587b2a5370eac5f6bd9b-sr&n=13",
      PostAutor: "Werner von Braun",
      PostContent: "some text"
    },
    {
      PostAvatar: "https://www.capitalbuyback.com/img/customers.png",
      PostAutor: "Mother's friend's son",
      PostContent:
        "Эта статья показывает, как работает эта сравнительно новая технология,\n" +
        "        именно работает, а не только описание свойств с поверхностными\n" +
        "        примерами.Эта статья показывает, как работает эта сравнительно новая\n" +
        "        технология, именно работает, а не только описание свойств с\n" +
        "        поверхностными примерами. Эта статья показывает, как работает эта\n" +
        "        сравнительно новая технология, именно работает, а не только описание\n" +
        "        свойств с поверхностными примерами."
    },
    {
      PostAvatar: "https://www.capitalbuyback.com/img/customers.png",
      PostAutor: "John Inspruker",
      PostContent:
        "Эта статья показывает, как работает эта\n" +
        "        сравнительно новая технология, именно работает, а не только описание\n" +
        "        свойств с поверхностными примерами."
    }
  ],
  newPostContent: "",
  UsersBase: [
    {
      avatar: "https://www.capitalbuyback.com/img/customers.png",
      id: 0,
      user: "John Inspruker"
    },
    {
      avatar:
        "https://im0-tub-kz.yandex.net/i?id=080351a460cf587b2a5370eac5f6bd9b-sr&n=13",
      id: 1,
      user: "Sanya"
    },
    {
      avatar: "https://www.capitalbuyback.com/img/customers.png",
      id: 2,
      user: "Mother's friend's son"
    },
    {
      avatar:
        "https://im0-tub-kz.yandex.net/i?id=080351a460cf587b2a5370eac5f6bd9b-sr&n=13",
      id: 3,
      user: "Elon Musk"
    },
    {
      avatar: "https://www.capitalbuyback.com/img/customers.png",
      id: 4,
      user: "Bill Gates"
    },
    {
      avatar:
        "https://im0-tub-kz.yandex.net/i?id=080351a460cf587b2a5370eac5f6bd9b-sr&n=13",
      id: 5,
      user: "Werner von Braun"
    },
    {
      avatar: "https://www.capitalbuyback.com/img/customers.png",
      id: 6,
      user: "Vasya"
    },
    {
      avatar:
        "https://im0-tub-kz.yandex.net/i?id=080351a460cf587b2a5370eac5f6bd9b-sr&n=13",
      id: 7,
      user: "Some dude"
    }
  ]
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let NewPost = {
        PostAvatar: state.UsersBase[0].avatar,
        PostAuthor: state.UsersBase[0].user,
        PostContent: state.newPostContent
      };
      state.PostsBase.push(NewPost);
      state.newPostContent = "";
      break;
    case WHILE_POST_INPUTTING:
      state.newPostContent = action.newContent;
      break;
  }
  return state;
};
export default PostsReducer;
