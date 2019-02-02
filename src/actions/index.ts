import axios from "axios";

import { FETCH_COMMENTS, SAVE_COMMENT } from "./types";

export function saveComment(comment: string) {
  return {
    payload: comment,
    type: SAVE_COMMENT
  };
}
export function fetchComment() {
  // FIXME: typing dispatch
  return async (dispatch: any) => {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/comments"
    );
    dispatch({
      payload: response,
      type: FETCH_COMMENTS
    });
  };
}
