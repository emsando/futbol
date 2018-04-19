import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';

const Login = () => (
  <div className="login-container">
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: '40vw' }}>
        <Header
          as="h2"
          color="green"
          textAlign="center"
        >
          Welcome to the Futbol App!
        </Header>
        <Form>
          <Segment raised>
            <Form.Input
              icon="user"
              iconPosition="left"
              placeholder="Username"
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button fluid color="green" size="large">Login</Button>
          </Segment>

          <Segment raised>
            <Button fluid size="large" color="facebook">
              <Icon name="facebook" /> Sign in with Facebook
            </Button>
          </Segment>

          <Segment raised>
            <Message>
            First time here? <a href="">Sign up</a>
            </Message>
          </Segment>

        </Form>
      </Grid.Column>
    </Grid>
  </div>
);

export default Login;

