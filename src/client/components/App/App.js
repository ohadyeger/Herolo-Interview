import React from "react";
import { connect } from "react-redux";
import AppActions from "./actions";
import Emails from "../ListView/Emails/Emails";
import ComposeForm from "../Forms/ComposeForm/ComposeForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Icon, Menu, Container } from "semantic-ui-react";

const BackgroundUrl =
  "https://herolo.co.il/portfolio-background-new2.2fef25b1c7370a4cff57.jpg"; // "http://www.soos.org.il/wp-content/uploads/2019/08/soos-mini-site-baner.jpg";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <div
            style={{
              height: "100%",
              backgroundImage: `url(${BackgroundUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "yes",
              resizeMode: "stretch",
            }}
          >
            <div style={{ height: "7%" }}>
              <Menu fixed="top" inverted style={{ height: "7%" }}>
                <Menu.Item header as="a" href="/">
                  <Icon name="home" />
                  Herolo Full Stack Assignment
                </Menu.Item>
                <Menu.Item header as="a" href="/compose">
                  <Icon name="compose" />
                  Compose Email Page
                </Menu.Item>
                <Menu.Item header as="a" href="/manage">
                  <Icon name="mail" />
                  Manage Emails Page
                </Menu.Item>
              </Menu>
            </div>
            <section style={{ height: "93%", width: "100%" }}>
              <Switch style={{ height: "100%", width: "100%" }}>
                <Route exact path="/">
                  Welcome
                </Route>
                <Route exact path="/compose">
                  <ComposeForm />
                </Route>
                <Route exact path="/manage">
                  <Emails />
                </Route>
              </Switch>
            </section>
          </div>
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUserEventHandler: (name) => {
      dispatch(AppActions.loadUserEventHandler(name));
    },
    authenticate: (page_permissions) =>
      dispatch(AppActions.authenticate(page_permissions)),
    logout: () => dispatch(AppActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
