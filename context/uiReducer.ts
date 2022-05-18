import { UIState } from "./UIProvider";

type UIActionType =
  | { type: "UI - Ligh" }
  | { type: "UI - Dark" }
  | { type: "UI - Custom" }
  | { type: "UI - CustomeColor"; payload: string };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Ligh":
      return {
        ...state,
        themeColor: "light",
      };

    case "UI - Dark":
      return {
        ...state,
        themeColor: "dark",
      };

    case "UI - Custom":
      return {
        ...state,
        themeColor: "custom",
      };

    case "UI - CustomeColor":
      return {
        ...state,
        themeColor: action.payload,
      };
    default:
      return state;
  }
};
