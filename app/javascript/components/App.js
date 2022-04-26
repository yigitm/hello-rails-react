import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import configureStore from '../redux/configureStore';
const store = configureStore();

class App extends React.Component {
  render() {
    return <Provider store={store}></Provider>;
  }
}

export default App;
