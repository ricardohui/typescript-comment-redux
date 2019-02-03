import { SAVE_COMMENT } from "../../actions/types";
import commentReducer from "../comments";

it("should handle action of type SAVE_COMMENT", () => {
  const action = {
    payload: "New Comment",
    type: SAVE_COMMENT
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("should handle action with unknown type", () => {
  const newState = commentReducer([], { type: "ANY" });
  expect(newState).toEqual([]);
});
