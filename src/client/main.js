import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginComponent from './Login/LoginComponent';
import RegisterComponent from './Register/RegisterComponent';
import { default as Router, Route } from 'react-router'

const App = () => (
  <MuiThemeProvider>
    <LoginComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

ReactDOM.render((
    <Router>
        <Route path="/" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
    </Router>
), document.getElementById('app'));
