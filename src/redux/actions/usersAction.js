import {
  MY_ORDERS_RESET,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  FOLLOW_FAIL,
  NF_USER_LIST_FAIL,
  NF_USER_LIST_SUCCESS,
  NF_USER_LIST_REQUEST,
  URL,
} from "../types";
import axios from "axios";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const res = await axios.post(`${URL}/api/users/login`, { email, password });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const register =
  ({ email, password, username, fullname }) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const res = await axios.post(`${URL}/api/users`, {
        email,
        password,
        username,
        fullname,
      });
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });

      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.get(`${URL}/api/users/${id}`, config);
    dispatch({ type: USER_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.get(`${URL}/api/users`, config);
    dispatch({ type: USER_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listNonFollowingUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: NF_USER_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.get(`${URL}/api/users/unfollowing`, config);
    dispatch({ type: NF_USER_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: NF_USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.put(`${URL}/api/users`, user, config);
    dispatch({type: USER_UPDATE_PROFILE_SUCCESS, payload: res.data});
   

  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
};

export const follow = (id) => async (dispatch, getState) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    dispatch({ type: FOLLOW_REQUEST });
    const res = await axios.put(`${URL}/api/users/${id}/follow`, {}, config);
    dispatch({ type: FOLLOW_SUCCESS });
  } catch (error) {
    dispatch({ type: FOLLOW_FAIL });
  }
};
