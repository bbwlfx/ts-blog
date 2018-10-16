import React, { Component } from "react";
import configureStore from "models/configure";
import entry from "decorators/entry";
import { Route } from "react-router-dom";
import Layout from "components/layout";
import routes from "./routes";

class Home extends Component {
  render() {
    return (
      <Layout>
        {routes.map(({ path, component: Component, exact = true }) => {
          return (
            <Route path={path} component={Component} key={path} exact={exact} />
          );
        })}
      </Layout>
    );
  }
}

const Entry = entry(configureStore)(Home);
export { Entry as default, Entry, configureStore };
