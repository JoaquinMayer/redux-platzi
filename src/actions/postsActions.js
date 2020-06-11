import axios from "axios";
import { LOADING, ERROR, GET_POSTS_BY_USER } from "../types/postsTypes";
import { GET_USERS } from "../types/usuariosTypes";

export const getPostByUser = (key) => async (dispatch, getState) => {
  const { users } = getState().userReducer;
  const { posts } = getState().postReducer;
  const user_id = users[key].id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  const updated_posts = [...posts, res.data];
  const posts_key = posts.length - 1;
  const updated_users = [...users];
  updated_users[key] = {
    ...users[key],
    posts_key,
  };

  dispatch({
    type: GET_USERS,
    payload: updated_users,
  });

  dispatch({
    type: GET_POSTS_BY_USER,
    payload: updated_posts,
  });
};
