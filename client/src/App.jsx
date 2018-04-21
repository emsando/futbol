import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LoginOrSignUp from './LoginOrSignUp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loggedIn: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(username, password) {
    console.log('App: ', username);
    console.log('App: ', password);
    axios.post('/login', {
      username,
      password,
    })
      .then((res) => {
        console.log(res);
        this.setState({
          user: username,
          loggedIn: true,
        }, () => {
          console.log('Logged in as: ', this.state.user);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <LoginOrSignUp handleLogin={this.handleLogin} />
      );
    }
    return (
      <div>
        Logged In! <br />
        Username: {this.state.user}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
