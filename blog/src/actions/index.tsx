import { ThunkDispatch } from "redux-thunk";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import { Action } from "redux";
import _ from "lodash";

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatchProp = ThunkDispatch<MyRootState, MyExtraArg, Action>;

export const fetchPostsandUsers = () => async (
  dispatch: MyThunkDispatchProp,
  getState: any
) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));
  userIds.forEach(id => dispatch(fetchUser(id)))
};

export const fetchPosts = () => {
  return async (dispatch: MyThunkDispatchProp) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

// export const fetchUser = (id: number) => {
//   return (dispatch: MyThunkDispatchProp) => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`./users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = (id: number) => async (
  dispatch: MyThunkDispatchProp
) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
