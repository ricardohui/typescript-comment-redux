import * as React from "react";
import "./App.css";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import Container from "./Container";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Container styleClass="container">Hi</Container>
        <CommentBox />
        <CommentList />{" "}
      </div>
    );
  }
}

export default App;
