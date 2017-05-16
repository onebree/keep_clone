import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Card, CardSection, Field } from './common';

class NoteForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Field
            label="Titile"
            placeholder="Title"
          />
        </CardSection>

        <CardSection>
          <Field
            label="Note body"
            placeholder="Note body"
          />
        </CardSection>

        <CardSection>
          <View style={{ flex: 1 }}>
            <Button
              title="Delete"
              onPress={() => console.log('delete pressed')}
            />
            <Button
              title="Make a copy"
              onPress={() => console.log('copy pressed')}
            />
          </View>
        </CardSection>
      </Card>
    );
  }
}

export default NoteForm;
