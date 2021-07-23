import { ActionCreator, Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { KeyValuePair } from "../../types";
import { IState } from "./store";

import { PayloadAction } from "./types";
import { HttpMethod } from "../../types";

export const simpleAction: ActionCreator<PayloadAction> = ({ type, ...rest }: KeyValuePair) => ({
  type,
  payload: {
    ...rest
  }
})

interface ThunkActionData extends Action<string> {
  url: string,
  method?: string,
  body?: KeyValuePair,
  params?: KeyValuePair,
}

interface ThunkActionCreator {
  (s: ThunkActionData): ThunkAction<Promise<any>, IState, string, Action<string>>
}

interface AsyncActionTypes {
  (s: string): { LOADING: string, SUCCESS: string, FAILURE: string }
}

export const createAsyncActionTypes: AsyncActionTypes = type => ({
  LOADING: `${type}_LOADING`,
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
});

export const thunkAsyncAction: ThunkActionCreator = ({ type, url, method = HttpMethod.GET, params = {}, body }) =>
  async (dispatch, state, baseUrl) => {
    const asyncActionTypes = createAsyncActionTypes(type);
    try {
      dispatch(simpleAction({
        type: asyncActionTypes.LOADING,
        loading: true,
      }))
      const fetchConfig: KeyValuePair = {
        method
      };
      if (body) {
        fetchConfig.body = JSON.stringify(body);
      }
      const queryParams = Object.keys(params).map(param => `${param}=${params[param]}`).join('&')
      const uri = encodeURI(`${baseUrl}${url}?${queryParams}`);
      const response = await fetch(uri, fetchConfig);
      const json = await response.json();
      dispatch(simpleAction({
        type: asyncActionTypes.SUCCESS,
        result: json,
      }))
    } catch (error) {
      console.error(error);
      dispatch(simpleAction({
        type: asyncActionTypes.FAILURE,
        error: {
          errorMessage: error.message
        },
      }))
    } finally {
      dispatch(simpleAction({
        type: asyncActionTypes.LOADING,
        loading: false,
      }))
    }
  };