import * as React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component<{ comments: string[] }> {
  public render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
  private renderComments() {
    return (
      this.props.comments &&
      this.props.comments.map(comment => {
        return <li key={comment}>{comment}</li>;
      })
    );
  }
}

function mapStateToProps(state: { comments: string[] }) {
  return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);
