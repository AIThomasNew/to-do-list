import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={(0, 5)}
      onPress={() => onOpen(todo.id)}
      onLongPress={onRemove.bind(null, todo.id)} // удаление жестким привязыванием контекста
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
