import { PayloadAction } from "../../config/redux/types";
import { UserPostReducer } from "./types";

const initialState: UserPostReducer = {
  loading: false,
  data: [],
}

export const actionTypes = {
  LOADING: 'USER_POSTS_LOADING',
  SUCCESS: 'USER_POSTS_SUCCESS',
  FAILURE: 'USER_POSTS_FAILURE',
  SET_SELECTED_USER: 'USER_POSTS_SET_SELECTED_USER'
}

const UserPostsReducer = (state = initialState, action: PayloadAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOADING: {
      return {
        ...state,
        loading: payload.loading,
      }
    }
    case actionTypes.SUCCESS: {
      return {
        ...state,
        data: payload.result,
      }
    }
    case actionTypes.FAILURE: {
      return {
        ...state,
        error: payload.error
      }
    }
    case actionTypes.SET_SELECTED_USER: {
      return {
        ...state,
        selectedUser: payload.user,
      }
    }
  }
  return state;
}

export default UserPostsReducer;
