import {PageUpdate} from "./Redux-Store";

export const CREATE_NEW_POST = NewText => {
  return { type: "CREATE-NEW-POST", NewText: NewText };
};

const InitialState = {
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
  NewPostContent: ""
};

const Posts_Reducer = (state, action) => {
  const InitialState = {
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
    NewPostContent: ""
  };
  if ( typeof(state) === "undefined") {
    return  InitialState
  }else if(action.type === "CREATE-NEW-POST"){
    let NewPost = {
      PostAvatar: state.PostsBase[0].PostAvatar,
      PostAutor: state.PostsBase[0].PostAutor,
      PostContent: action.NewText
    };
    return NewPost;
  }
  return state
};

export default Posts_Reducer;
