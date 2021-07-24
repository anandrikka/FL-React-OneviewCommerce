import { RenderOptions, render, RenderResult } from "@testing-library/react";
import { FC, ReactChildren, ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, RouteComponentProps, useHistory, useLocation } from 'react-router-dom';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from "redux-thunk";

import { rootReducer, composeEnhancers, IStore, apiUrl } from './config/redux/store';
import { KeyValuePair } from "./types";

interface CustomRenderOptions extends RenderOptions {
  preloadedState?: any,
}

type CustomRender = {
  (ui: ReactElement, options?: CustomRenderOptions): RenderResult
}

const renderWrapper = (store: IStore): FC<{}> => ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
)

type MockRouteComponentProps = {
  (props?: KeyValuePair): RouteComponentProps
}

const getRouteComponentProps: MockRouteComponentProps = props => {
  
  const location = {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: {}
  };

  return {
    match: {
        isExact: true,
        params: {},
        path: "",
        url: ""
    },
    location,
    history: {
      length:2,
      action:"POP",
      location: location,
      push: jest.fn(),
      replace: jest.fn(),
      go: jest.fn(),
      goBack: jest.fn(),
      goForward: jest.fn(),
      block: jest.fn(),
      createHref: jest.fn(),
      listen: jest.fn()
    },
  };
}

const appRender: CustomRender = (ui, options) => {
  const store = createStore(
    rootReducer,
    options?.preloadedState,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(apiUrl)))
  );
  return render(ui, {
    wrapper: renderWrapper(store),
    ...options,
  })
}

export * from '@testing-library/react';

export {
  appRender,
  getRouteComponentProps,
};
