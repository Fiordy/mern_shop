import axios from "axios";
import { UserConstants } from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  console.log(UserConstants.Login.REQUEST);
  try {
    dispatch({
      type: UserConstants.Login.REQUEST,
    });

    const { data } = await axios.post("/api/users/login", { email, password });

    dispatch({
      type: UserConstants.Login.SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserConstants.Login.FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  console.log(UserConstants.Register.REQUEST);
  try {
    dispatch({
      type: UserConstants.Register.REQUEST,
    });

    const { data } = await axios.post("/api/users", { name, email, password });

    dispatch({
      type: UserConstants.Register.SUCCESS,
      payload: data,
    });

    dispatch({
      type: UserConstants.Login.SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserConstants.Register.FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  console.log(UserConstants.Login.LOGOUT);
  try {
    localStorage.removeItem("userInfo");
  } catch (error) {
    //
  }
};
