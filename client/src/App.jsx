import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx';
import axios from 'axios';

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
    axios.post('/login', {
      username,
      password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
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
