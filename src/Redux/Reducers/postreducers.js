import { POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE } from "./types";

const initialState = {
  posts: [],
  isLoading: false,
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
