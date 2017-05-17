import React from 'react';
import { TextInput, View } from 'react-native';

const NoteField = ({ placeholder, multiline, style }) => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder={placeholder}
        autoCapitalize="sentences"
        multiline={multiline}
        style={style}
      />
    </View>
  );
};

export { NoteField };
