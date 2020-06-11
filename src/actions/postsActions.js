import axios from "axios";
import { GET_POSTS, LOADING, ERROR } from "../types/postsTypes";

export const postsGetAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Algo salio mal, intente nuevamente más tarde.",
    });
    console.log(error);
  }
};

export const getPostByUser = (key) => async (dispatch, getState) => {
  const { users } = getState().userReducer;
  const user_id = users[key].id
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  dispatch({
    type: GET_POSTS,
    payload: res.data,
  });
};
