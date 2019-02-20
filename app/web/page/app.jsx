import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
import { pureRoutes } from "../routes";

console.log("pure routes --> ", pureRoutes);

import { Menu, Icon } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current: "home" };
  }

  handleClick(e) {
    console.log("click ", e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick.bind(this)}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {pureRoutes.map(route => {
            const { path, name } = route;

            return (
              <Menu.Item key={name}>
                <Link to={path}>{name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
        <Switch>
          {pureRoutes.map(route => {
            const { path, name, component } = route;

            return (
              <Route
                key={name}
                path={path}
                component={component}
                exact={true}
              />
            );
          })}
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
