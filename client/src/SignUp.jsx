import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <Header as="h3" textAlign="center">Sign up to find pickup soccer games near you</Header>
    );
  }
}

export default SignUp;
