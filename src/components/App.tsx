import * as React from "react";
import "./App.css";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CommentBox />
        <CommentList />{" "}
      </div>
    );
  }
}

export default App;
