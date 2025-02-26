import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './app/screens/Home';
import User from './app/screens/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

const App = () => {
  return <h1>Hello World! CI/CD Pipeline is estblisted.</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
