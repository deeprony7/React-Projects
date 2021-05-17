import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/new" component={StreamCreate}></Route>
        <Route path="/streams/edit" component={StreamEdit}></Route>
        <Route path="/streams/delete" component={StreamDelete}></Route>
        <Route path="/streams/show" component={StreamShow}></Route>
      </Router>
    </div>
  );
};

export default App;
