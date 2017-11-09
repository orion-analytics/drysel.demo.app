import React, { Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { InputGroup, Button, Callout } from '@blueprintjs/core';

const IndexWrapper = styled.div`
  width: 400px;
  text-align: center;
`;

const StyledCallout = styled(Callout)`text-align: left;`;

class Index extends Component {
  state = {
    username: '',
    password: '',
    isLoading: false,
    isError: false
  };

  handleLogin = () => {
    this.setState({ isLoading: true });

    if (this.state.username === 'joe' && this.state.password === 'admin') {
      setTimeout(() => Router.push('/profile'), 500);
    } else {
      setTimeout(
        () =>
          this.setState({
            username: '',
            password: '',
            isLoading: false,
            isError: true
          }),
        500
      );
    }
  };

  render() {
    return (
      <IndexWrapper className="pt-card pt-elevation-4">
        <br />
        <h2 id="login">Login</h2>
        <br />
        <br />
        <InputGroup
          className="pt-large"
          id="username"
          type="text"
          value={this.state.username}
          placeholder="Username"
          leftIconName="user"
          onChange={event => this.setState({ username: event.target.value })}
          disabled={this.state.isLoading}
        />
        <br />
        <InputGroup
          className="pt-large"
          id="password"
          type="password"
          value={this.state.password}
          placeholder="Password"
          leftIconName="lock"
          onChange={event => this.setState({ password: event.target.value })}
          disabled={this.state.isLoading}
        />
        <br />
        {!this.state.username &&
          !this.state.password &&
          this.state.isError && (
            <StyledCallout id="error" iconName="error" intent={3} title="Error">
              You have entered an invalid username or password
            </StyledCallout>
          )}
        <br />
        <Button
          className="pt-large pt-fill"
          id="button-login"
          text="Login"
          onClick={this.handleLogin}
          loading={this.state.isLoading}
          disabled={!this.state.username || !this.state.password}
        />
        <br />
        <br />
      </IndexWrapper>
    );
  }
}

export default Index;
