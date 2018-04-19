import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.user = null;
  }

  render() {
    return (
      <Login />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
