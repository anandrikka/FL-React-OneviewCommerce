import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import UserPostsReducer from "../../pages/user-posts/reducer";

import UsersReducer from "../../pages/users/reducer";

export const apiUrl: string = 'https://jsonplaceholder.typicode.com';

const preloadedState: any = undefined;

export const rootReducer = combineReducers({
  users: UsersReducer,
  posts: UserPostsReducer,
})

export const composeEnhancers = process.env.NODE_ENV === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose; 

const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk.withExtraArgument(apiUrl))));

// Type of state and dispatch functions
export type IState = ReturnType<typeof store.getState>
export type IDispatch = typeof store.dispatch
export type IStore = typeof store
export default store;
