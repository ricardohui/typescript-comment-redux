import * as React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
// TODO: when passing function as a prop, you need to define the interface for props.
interface ICommentBoxProps {
  fetchComment: React.MouseEventHandler<HTMLButtonElement>;
  saveComment: (comment: string) => void;
}

class CommentBox extends React.Component<ICommentBoxProps> {
  public state = { comment: "" };
  public render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComment}>
          Fetch Comments
        </button>
      </div>
    );
  }
  private handleChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    this.setState({ comment: event.currentTarget.value });
  };

  private handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };
}

export default connect(
  null,
  actions
)(CommentBox);
