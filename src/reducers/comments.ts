import { IPayloadedAction } from "../actions/action";
import { FETCH_COMMENTS, SAVE_COMMENT } from "../actions/types";

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function(
  state = [],
  action: IPayloadedAction<string, { data: IComment[] }>
) {
  switch (action.type) {
    case FETCH_COMMENTS:
      console.log(action.payload);
      const comments = action.payload.data.map(comment => comment.name);

      return [...state, ...comments];
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
