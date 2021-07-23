
import { RawUser, User } from './types';
import { PayloadAction } from '../../config/redux/types';
import { ErrorDetails } from '../../types';

export type UserReducer = {
  data: User[],
  loading: Boolean,
  error?: ErrorDetails,
  searchTerm: string,
}

const initalState: UserReducer = {
  data: [],
  loading: false,
  searchTerm: '',
}

export const actionTypes = {
  LOADING: 'USERS_LOADING',
  SUCCESS: 'USERS_SUCCESS',
  FAILURE: 'USERS_FAILURE',
  SET_FILTER_TEXT: 'USERS_SET_FILTER_TEXT'
}

const mapUser: (user: RawUser) => User = user => ({
  id: user.id,
  name: user.name,
  email: user.email,
  city: user.address.city,
  company: user.company.name,
});

const UsersReducer = (state = initalState, action: PayloadAction) => {
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
        data: payload.result.map(mapUser),
      }
    }
    case actionTypes.FAILURE: {
      return {
        ...state,
        error: payload.error
      }
    }
    case actionTypes.SET_FILTER_TEXT: {
      return {
        ...state,
        searchTerm: payload.searchTerm,
      }  
    }
  }
  return state;
}

export default UsersReducer;
