import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Card, CardSection } from '../common';
import { NoteField } from '../notes';

class NoteForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <NoteField
            placeholder="Title"
            style={{ fontWeight: 'bold', fontSize: 16 }}
          />
        </CardSection>

        <CardSection>
          <NoteField
            placeholder="Note body"
            multiline
            style={{ height: 200, textAlignVertical: 'top' }}
          />
        </CardSection>

        <CardSection>
          <View style={{ flex: 1 }}>
            <Button
              title="Delete"
              onPress={() => console.log('delete pressed')}
            />
          </View>
        </CardSection>
        <CardSection>
          <View style={{ flex: 1 }}>
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

export { NoteForm };
