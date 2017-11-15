// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

import 'semantic-ui-css/semantic.min.css';
// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

import 'react-dates/initialize';

import App from './AppWithReduxForm.jsx';

const rootReducer = combineReducers({
  form: formReducer,
})

const store = createStore(rootReducer, {}, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('react-root'));

