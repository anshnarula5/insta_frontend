export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL"
export const USER_LOGOUT = "USER_LOGOUT"

export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL";
export const USER_DETAILS_RESET = "USER_DETAILS_RESET";

export const USER_LIST_REQUEST = "USER_LIST_REQUEST"
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS"
export const USER_LIST_FAIL = "USER_LIST_FAIL"
export const USER_LIST_RESET = "USER_LIST_RESET"

export const NF_USER_LIST_REQUEST = "NF_USER_LIST_REQUEST"
export const NF_USER_LIST_SUCCESS = "NF_USER_LIST_SUCCESS"
export const NF_USER_LIST_FAIL = "NF_USER_LIST_FAIL"
export const NF_USER_LIST_RESET = "NF_USER_LIST_RESET"

export const USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_REQUEST"
export const USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_SUCCESS"
export const USER_UPDATE_PROFILE_FAIL = "USER_UPDATE_FAIL"
export const USER_UPDATE_PROFILE_RESET = "USER_UPDATE_RESET"

export const FOLLOW_REQUEST=  "FOLLOW_REQUEST"
export const FOLLOW_SUCCESS=  "FOLLOW_SUCCESS"
export const FOLLOW_FAIL = "FOLLOW_FAIL"

export const GET_FOLLOWING_POSTS_REQUEST = "GET_FOLLOWING_POSTS_REQUEST"
export const GET_FOLLOWING_POSTS_SUCCESS = "GET_FOLLOWING_POSTS_SUCCESS"
export const GET_FOLLOWING_POSTS_FAIL = "GET_FOLLOWING_POSTS_FAIL"

export const GET_ALL_POSTS_REQUEST = "GET_ALL_POSTS_REQUEST"
export const GET_ALL_POSTS_SUCCESS = "GET_ALL_POSTS_SUCCESS"
export const GET_ALL_POSTS_FAIL = "GET_ALL_POSTS_FAIL"

export const LIKE_REQUEST=  "LIKE_REQUEST"
export const LIKE_SUCCESS=  "LIKE_SUCCESS"
export const LIKE_FAIL = "LIKE_FAIL"

export const COMMENT_REQUEST=  "COMMENT_REQUEST"
export const COMMENT_SUCCESS=  "COMMENT_SUCCESS"
export const COMMENT_FAIL = "COMMENT_FAIL"

export const CREATE_POST_REQUEST=  "CREATE_POST_REQUEST"
export const CREATE_POST_SUCCESS=  "CREATE_POST_SUCCESS"
export const CREATE_POST_FAIL = "CREATE_POST_FAIL"

export const URL = "https://instagram-b2yt.onrender.com"


// export const userDetailsReducer = (state = { user: {} }, action) => {
//     const { type, payload } = action;
//     switch (type) {
//       case USER_DETAILS_REQUEST:
//         return { ...state, loading: true };
//       case USER_DETAILS_SUCCESS:
//         return { loading: false, user: payload };
//       case USER_DETAILS_FAIL:
//         return { loading: false, error: payload };
//       case USER_DETAILS_RESET:
//         return { user: {} };
//       default:
//         return state;
//     }
//   };