import axios from "axios";
import { GET_USERS, LOADING, ERROR } from "../types/usuariosTypes";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
    console.log(error);
  }
};
