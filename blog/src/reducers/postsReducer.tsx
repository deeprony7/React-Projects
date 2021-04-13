interface Action {
  type: string;
  payload: any;
}

export default (state = [], action: Action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
