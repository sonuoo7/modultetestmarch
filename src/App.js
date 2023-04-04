import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { Provider } from "react-redux";
import PostDetails from "./Components/PostDetails";
import store from "./store";
import './App.css'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/posts/:id"
              element={
                <div>
                  <PostDetails />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
