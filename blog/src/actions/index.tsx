import { ThunkDispatch } from 'redux-thunk';
import jsonPlaceholder from '../apis/jsonPlaceholder'
import { Action } from 'redux';

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatchProp = ThunkDispatch<MyRootState, MyExtraArg, Action>;

export const fetchPosts = () => {
    return async (dispatch: MyThunkDispatchProp) => {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({ type: 'FETCH_POSTS', payload: response })
    }
}