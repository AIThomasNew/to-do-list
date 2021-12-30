import React from 'react';
import { View, Text, Button } from 'react-native';

const TodoScreen = ({ goBack }) => {
  return (
    <View>
      <Text>Todo Screen</Text>
      <Button title="Вернуться" onPress={goBack} />
    </View>
  );
};

export default TodoScreen;
