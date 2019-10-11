import DialogItem from "../../components/Content/Dialogs/DialogItem";
import Message from "../../components/Content/Dialogs/Message";

let Store = {
  _state: {
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
    ],
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
    ],
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

      NewMessageContent: "" ,
    NewPostContent: ""//сюда отпраляется инпут из GetNewPostContent()// для добавления поста;
  },

  //id randomiser
  RandomId() {
    return Math.floor((Math.random() + Math.random() * 10) * 10);
  },

  //Делаем нового юзверя(пока что не используется)
  // CreateNewUser() {
  //   this.Store._state.UsersBase.push({ id: Store.getRandomId(), user: "Random Name" });
  // },

  //Делаем новый пост
  CreateNewPost() {
    let NewPost = {
      PostAvatar: this._state.UsersBase[0].avatar,
      PostAutor: this._state.UsersBase[0].user,
      PostContent: this.NewPostContent
    };
    this._state.PostsBase.push(NewPost);
    this.PageUpdate(Store.State, Store.GetNewPostContent);
  },

  CreateNewMessage() {
    let NewMessage = {
      id: 3,
      message: this.NewMessageContent
    };
    this._state.MessagesBase.push(NewMessage);
    this.PageUpdate(Store.State, Store.GetNewPostContent);
  },

  //Пытаемся во ФЛАКС архитектуру
  //Reset - обнуление поля ввода поста
  GetNewPostContent(NewContent) {
    this.NewPostContent = NewContent;
    this.CreateNewPost();
  },
  GetNewMessageContent(NewContent) {
    this.NewMessageContent = NewContent;
    this.CreateNewMessage();
  },

  //сюда кидается коллбэк (ReRender)
  PageUpdate(Store) {},

  //избавляемся от циркулярной зависимости: прокидываем ReRender через коллбэк
  Subscriber(callback) {
    this.PageUpdate = callback;
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    switch (action.type) {
      case "CREATE-NEW-POST":
        this.GetNewPostContent(action.NewText);
        break;
      case "GetMessageContent":
        this.GetNewMessageContent(action.NewText);
        break;
      default:
        alert("Зовите программиста, что-то пошло не так");
    }
  }
};
export const CREATE_NEW_POST = NewText => {
  return { type: "CREATE-NEW-POST", NewText: NewText };
};
export const GetMessageContent = NewText => {
  return { type: "GetMessageContent", NewText: NewText };
};

export default Store;
