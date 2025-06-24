export type StateType = {
  themeId: number;
};

const initState: StateType = {
  themeId: 1,
};

export const themeReducer = (
  state: StateType = initState,
  action: ChangeThemeIdActionType
): StateType => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID":
      return {
        ...state,
        themeId: Number(action.id),
      };
    default:
      return state;
  }
};

type ChangeThemeIdActionType = {
  type: "SET_THEME_ID";
  id: number;
};
export const changeThemeId = (id: number): ChangeThemeIdActionType =>
  ({ type: "SET_THEME_ID", id } as const);
