import { IPayloadedAction } from "../actions/action";
import { FETCH_COMMENTS, SAVE_COMMENT } from "../actions/types";

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
interface IData {
  data: IComment[];
}
export default function(
  state = [],
  action: IPayloadedAction<string, IData | string>
) {
  switch (action.type) {
    case FETCH_COMMENTS:
      console.log(action.payload);
      if (!action.payload) {
        return state;
      }
      const payload: IData = action.payload as IData;
      const comments = payload.data.map(
        (comment: { name: any }) => comment.name
      );
      return [...state, ...comments];

    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
