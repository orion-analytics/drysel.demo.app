import React, { Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { InputGroup, Button, Icon } from '@blueprintjs/core';

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1200px;
`;

const ProfileInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

const ProfileOutputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Input = styled(InputGroup)`margin: 10px 0;`;

const Divider = styled.div`border-left: 1px solid #b9bcbd;`;

const ProfileOutputGroupCard = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  text-align: center;
`;

const ProfileOutputGroupCardContent = styled.div`margin-top: 50px;`;

const StyledIcon = styled(Icon)`
  position: absolute;
  background-color: white;
  margin-top: -65px;
  font-size: 100px !important;
`;

const Skeleton = styled.div`
  width: 300px;
  height: ${props => `${props.height}px`};
  border-color: rgba(167, 182, 194, 0.2) !important;
  border-radius: 2px;
  box-shadow: none !important;
  background: rgba(167, 182, 194, 0.2) !important;
  background-clip: padding-box !important;
  cursor: default;
  color: transparent !important;
  animation: 2000ms linear infinite glow;
  pointer-events: none;
  user-select: none;
`;

class Profile extends Component {
  state = {
    isLoading: false,
    firstname: '',
    lastname: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
    output: {
      name: '',
      address1: '',
      address2: ''
    }
  };

  handleSave = () => {
    const {
      isLoading,
      firstname,
      lastname,
      addressLine1,
      addressLine2,
      city,
      state,
      zipcode
    } = this.state;

    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        firstname: '',
        lastname: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipcode: '',
        output: {
          name: `${firstname} ${lastname}`,
          address1: `${addressLine1}, ${addressLine2}`,
          address2: `${city}, ${state}, ${zipcode}`
        }
      });
    }, 500);
  };

  render() {
    return (
      <ProfileWrapper className="pt-card pt-elevation-4">
        <ProfileInputGroup>
          <h2 id="user-info">User information</h2>
          <br />
          <Input
            className="pt-large"
            id="firstname"
            type="text"
            value={this.state.firstname}
            placeholder="Firstname"
            onChange={event => this.setState({ firstname: event.target.value })}
            disabled={this.state.isLoading}
          />
          <Input
            className="pt-large"
            id="lastname"
            type="text"
            value={this.state.lastname}
            placeholder="Lastname"
            onChange={event => this.setState({ lastname: event.target.value })}
            disabled={this.state.isLoading}
          />
          <Input
            className="pt-large"
            id="address-line-1"
            type="text"
            value={this.state.addressLine1}
            placeholder="Address Line 1"
            onChange={event =>
              this.setState({ addressLine1: event.target.value })}
            disabled={this.state.isLoading}
          />
          <Input
            className="pt-large"
            id="address-line-2"
            type="text"
            value={this.state.addressLine2}
            placeholder="Address Line 2"
            onChange={event =>
              this.setState({ addressLine2: event.target.value })}
            disabled={this.state.isLoading}
          />
          <Input
            className="pt-large"
            id="city"
            type="text"
            value={this.state.city}
            placeholder="City"
            onChange={event => this.setState({ city: event.target.value })}
            disabled={this.state.isLoading}
          />
          <div
            className="pt-select pt-large pt-fill"
            style={{ margin: '5px 0' }}
          >
            <select
              id="state"
              defaultValue="State"
              onChange={event => this.setState({ state: event.target.value })}
              disabled={this.state.isLoading}
            >
              <option value="State">State</option>
              <option value="Arizona">Arizona</option>
              <option value="California">California</option>
              <option value="Washington">Washington</option>
            </select>
          </div>
          <Input
            className="pt-large"
            id="zipcode"
            type="text"
            value={this.state.zipcode}
            placeholder="Zipcode"
            onChange={event => this.setState({ zipcode: event.target.value })}
            disabled={this.state.isLoading}
          />
          <br />
          <Button
            className="pt-large pt-fill"
            id="button-save"
            text="Save"
            onClick={this.handleSave}
            loading={this.state.isLoading}
            disabled={
              !this.state.firstname ||
              !this.state.lastname ||
              !this.state.addressLine1 ||
              !this.state.addressLine2 ||
              !this.state.city ||
              !this.state.state ||
              this.state.state === 'State' ||
              !this.state.zipcode
            }
          />
        </ProfileInputGroup>
        <Divider />
        <ProfileOutputGroup>
          <ProfileOutputGroupCard className="pt-card pt-elevation-2">
            <StyledIcon iconName="user" />
            <ProfileOutputGroupCardContent>
              {this.state.output.name && !this.state.isLoading ? (
                <h2 id="name">{this.state.output.name}</h2>
              ) : (
                <Skeleton height={40} />
              )}
              <br />
              <br />
              {this.state.output.address1 && !this.state.isLoading ? (
                <h4 id="address1">{this.state.output.address1}</h4>
              ) : (
                <Skeleton height={30} />
              )}
              <br />
              {this.state.output.address2 && !this.state.isLoading ? (
                <h4 id="address2">{this.state.output.address2}</h4>
              ) : (
                <Skeleton height={30} />
              )}
            </ProfileOutputGroupCardContent>
          </ProfileOutputGroupCard>
        </ProfileOutputGroup>
      </ProfileWrapper>
    );
  }
}

export default Profile;
