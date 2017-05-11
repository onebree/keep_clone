import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Card, CardSection, Field } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Field
            label="Email"
            placeholder="test@example.com"
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

export default LoginForm;
