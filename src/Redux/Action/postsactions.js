import axios from "axios";

// Action Types
export const POSTS_REQUEST = "POSTS_REQUEST";
export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const POSTS_FAILURE = "POSTS_FAILURE";
export const POST_REQUEST = "POST_REQUEST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

// Action Creators
export const fetchPostsRequest = () => {
  return {
    type: POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPostRequest = () => {
  return {
    type: POST_REQUEST,
  };
};

export const fetchPostSuccess = (post) => {
  return {
    type: POST_SUCCESS,
    payload: post,
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: POST_FAILURE,
    payload: error,
  };
};

// Async Action Creators
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
        console.log(response);
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostsFailure(errorMsg));
      });
  };
};

export const fetchPost = (id) => {
  return (dispatch) => {
    dispatch(fetchPostRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const post = response.data;
        dispatch(fetchPostSuccess(post));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostFailure(errorMsg));
      });
  };
};
