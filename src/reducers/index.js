import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from './postReducers'

export default combineReducers({ userReducer, postReducer });
