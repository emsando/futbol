import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.user = null;

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(username, password) {
    this.user = username;
    console.log('App: ', username);
    console.log('App: ', password);
  }

  render() {
    return (
      <Login handleLogin={this.handleLogin} />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
