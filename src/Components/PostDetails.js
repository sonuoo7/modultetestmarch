import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../Redux/Action/postsactions";
import { Link, useParams } from "react-router-dom";
import "./Postdetails.css";

function PostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts()); // Fetch all the posts
  }, [dispatch]);

  // Find the post that matches the id parameter
  const post = posts.find((p) => p.id === Number(id));

  return (
    <div className="post-details-container">
      <Link to="/" className="post-details-heading">
        Social Media App
      </Link>
      <h2 className="post-details-id">Details Page For Post With ID {id}</h2>
      <div className="underline">  </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {post && (
        <div className="post-details-card">
          <img
            src={`https://picsum.photos/200?random=${post.id}`}
            alt={post.title}
            className="post-details-card-img-top"
          />
          <div className="post-details-card-body">
            <p className="post-details-card-id">User Id : {post.userId}</p>
            <p className="post-details-card-title">Title : {post.title}</p>
            <p className="post-details-card-body-text">Body : {post.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
