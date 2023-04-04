import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../Redux/Action/postsactions";
import { Link } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p>{error}</p>}
      <h1 className="heading">Social Media App</h1>
      <div className="underline"> </div>
      <div className="App">
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <div className="card">
                <img
                  src={`https://picsum.photos/200?random=${post.id}`}
                  alt={post.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-id">User Id : {post.userId}</p>
                  <p className="card-title">
                    Title : {post.title.slice(0, 20)}...
                  </p>
                  <p className="card-Body">
                    Body : {post.body.slice(0, 50)}...
                    <Link to={`/posts/${post.id}`} className="btn">
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
