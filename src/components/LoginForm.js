import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Field } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Field
            label="Email"
            placeholder="test@example.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Field
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <View style={{ flex: 1 }}>
            <Button
              title="Login"
              onPress={() => console.log('pressed')}
            />
          </View>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
