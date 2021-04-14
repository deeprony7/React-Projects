interface Action {
  type: string;
  payload: any;
}

export default (state = [], action: Action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
