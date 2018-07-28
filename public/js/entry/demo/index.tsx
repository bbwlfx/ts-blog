import Demo from 'containers/demo';
import React, { Component } from 'react';
import configureStore from 'models/configure';
import entry from 'decorators/entry';
import Routes from './router';
import { Router } from '@reach/router';

entry(configureStore)(Demo);


export default @entry(configureStore) class App extends Component {
  render() {
    return (
      <Router basepath="/">
        {
          Routes.map(({ name, path, component: Component }) => {
            return (<Component key={name} path={path} />);
          })
        }
      </Router>
    );
  }
}