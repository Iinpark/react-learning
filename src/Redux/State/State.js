let store = {
  /* User ID randomiser
   * will work wery soon
   * (i hope so)*/
  getRandomId() {
    return Math.floor((Math.random() + Math.random() * 10) * 10);
  },

  getState() {
    return this._state;
  },

  pageUpdate() {},
  subscribe(observer) {
    this.pageUpdate = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let NewPost = {
          PostAvatar: this._state.UsersBase[0].avatar,
          PostAuthor: this._state.UsersBase[0].user,
          PostContent: this._state.posts.newPostContent
        };
        this._state.posts.PostsBase.push(NewPost);
        this._state.posts.newPostContent = "";
        this.pageUpdate(this._state);
        break;
      case WHILE_POST_INPUTING:
        this._state.posts.newPostContent = action.newContent;
        this.pageUpdate(this._state);
        break;
      case WHILE_MESSAGE_INPUTING:
        this._state.messages.newMessageContent = action.newContent;
        this.pageUpdate(this._state);
        break;
      case ADD_MESSAGE:
        let newMessage = {
          message: this._state.messages.newMessageContent,
          id: this.getRandomId()
        };
        this._state.messages.MessagesBase.push(newMessage);
        this._state.messages.newMessageContent = "";
        this.pageUpdate(this._state);
        break;
      default:
        alert("Зовите программиста, что-то пошло не так");
    }
  },
  _state: {
    posts: {
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
      newPostContent: ""
    },
    messages: {
      newMessageContent: "",
      MessagesBase: [
        { id: 0, message: "Hi" },
        { id: 1, message: "Yo" },
        { id: 2, message: "In" },
        { id: 3, message: "Elon" },
        { id: 4, message: "We" },
        { id: 5, message: "Trust" },
        { id: 6, message: "Just" },
        { id: 7, message: "read the" },
        { id: 8, message: "instructions" }
      ]
    },
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
  }
};

//for IntelliSense
const WHILE_POST_INPUTING = "WHILE_POST_INPUTING";
const WHILE_MESSAGE_INPUTING = "WHILE_MESSAGE_INPUTING";
const ADD_POST = "ADD_POST";
const ADD_MESSAGE = "ADD_MESSAGE";

//action creators
export const postInputing = newPostInput => ({
  type: WHILE_POST_INPUTING,
  newContent: newPostInput
});
export const messageInputing = newMessageInput => ({
  type: WHILE_MESSAGE_INPUTING,
  newContent: newMessageInput
});

export const addPost = () => ({ type: ADD_POST });
export const addMessage = () => ({type: ADD_MESSAGE});

export default store;
window.store = store;
