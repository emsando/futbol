/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log('Login: ', this.state.username);
    console.log('Login: ', this.state.password);
    this.props.handleLogin(this.state.username, this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Segment raised>
            <Form.Input
              icon="user"
              iconPosition="left"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button
              fluid
              color="green"
              size="large"
              type="submit"
            >
            Login
            </Button>
          </Segment>
        </Form>

        <Segment raised>
          <Button fluid size="large" color="facebook">
            <Icon name="facebook" /> Sign in with Facebook
          </Button>
        </Segment>

        <Segment raised>
          <Message>
          First time here?&nbsp;
            <span
              className="sign-up-link"
              onClick={this.props.showSignUp}
            >
            Sign up
            </span>
          </Message>
        </Segment>
      </div>
    );
  }
}

export default Login;

