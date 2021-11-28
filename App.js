import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo.js';
import { Navbar } from './src/Navbar.js';
import { Todo } from './src/Todo.js';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // создание нового элемента
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => <Todo todo={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
