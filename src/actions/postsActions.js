import axios from "axios";
import { LOADING, ERROR, GET_POSTS_BY_USER } from "../types/postsTypes";

export const getPostByUser = (key) => async (dispatch, getState) => {
  const { users } = getState().userReducer;
  const { posts } = getState().postReducer;
  const user_id = users[key].id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  const updated_posts = [...posts, res.data];
  dispatch({
    type: GET_POSTS_BY_USER,
    payload: updated_posts,
  });
};
