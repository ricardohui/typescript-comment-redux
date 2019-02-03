import * as React from "react";
import "./App.css";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import Input from "./Input";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Input />
        <CommentBox />
        <CommentList />{" "}
      </div>
    );
  }
}

export default App;
