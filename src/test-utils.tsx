import { RenderOptions, render, RenderResult } from "@testing-library/react";
import { FC, ReactChildren, ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, Store } from 'redux';

import { rootReducer, composeEnhancers, IStore } from './config/redux/store';

interface CustomRenderOptions extends RenderOptions {
  preloadedState?: any,
}

type CustomRender = {
  (ui: ReactElement, options: CustomRenderOptions): RenderResult
}

const renderWrapper = (store: IStore): FC<{}> => ({ children }) => (
  <Provider store={store}>
    <Router>
      {children}
    </Router>
  </Provider>
)

const appRender: CustomRender = (ui, options) => {
  const store = createStore(rootReducer, options.preloadedState, composeEnhancers);
  return render(ui, {
    wrapper: renderWrapper(store),
    ...options,
  })
}

export * from '@testing-library/react';

export { appRender };
