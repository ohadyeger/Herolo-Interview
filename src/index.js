import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./client/components/App/index";
import reducers from "./client/reducers";
import Sagas from "./client/sagas";
import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

//create saga middleware
const sagaMiddleware = createSagaMiddleware();
//create store, add reducers, attach saga
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

//run saga(s)
sagaMiddleware.run(Sagas);

// Render the main component into the dom

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
