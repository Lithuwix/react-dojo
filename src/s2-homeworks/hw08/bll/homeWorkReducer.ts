import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
  switch (action.type) {
    case "sort": {
      // by name
      if (action.payload === "up") {
        return [...state.sort((a, b) => a.name.localeCompare(b.name))];
      }
      if (action.payload === "down") {
        return [...state.sort((a, b) => b.name.localeCompare(a.name))];
      }
      return state;
    }
    case "check": {
      return state
        .filter((el) => el.age > 18)
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    default:
      return state;
  }
};
