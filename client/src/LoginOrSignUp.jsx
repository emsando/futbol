import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

class LoginOrSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
    };

    this.showSignUp = this.showSignUp.bind(this);
  }

  showSignUp() {
    this.setState({
      signUp: true,
    });
  }

  render() {
    return (
      <div className="login-container">
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: '40vw' }}>
            <Header
              as="h1"
              color="green"
              textAlign="center"
            >
            Welcome to the Futbol App!
            </Header>
            {this.state.signUp ? (
              <SignUp />
            ) : (
              <Login handleLogin={this.props.handleLogin} showSignUp={this.showSignUp} />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginOrSignUp;

