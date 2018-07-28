import React, { Component } from 'react';
import configureStore from 'models/configure';
import entry from 'decorators/entry';
import Routes from './routes';
import { Router } from '@reach/router';

export default @entry(configureStore) class Demo extends Component {
  render() {
    return (
      <Router basepath="/">
        {
          Routes.map(({ name, path, component: Component }) => {
            return <Component key={name} path={path} />;
          })
         }
      </Router>
    );
  }
}