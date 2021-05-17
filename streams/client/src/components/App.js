import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const PageOne = () => {
  return <div>PageOne</div>;
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">
        <button>Click me!</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={PageOne}></Route>
        <Route path="/pagetwo" component={PageTwo}></Route>
      </Router>
    </div>
  );
};

export default App;
