const WHILE_POST_INPUTTING = "WHILE_POST_INPUTTING";
const ADD_POST = "ADD_POST";

const PostsReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let NewPost = {
        PostAvatar: state.UsersBase[0].avatar,
        PostAuthor: state.UsersBase[0].user,
        PostContent: state.posts.newPostContent
      };
      state.posts.PostsBase.push(NewPost);
      state.posts.newPostContent = "";
      break;
    case WHILE_POST_INPUTTING:
      state.posts.newPostContent = action.newContent;
      break;
  }
  return state;
};
export default PostsReducer;
