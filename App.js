import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
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
    <ScrollView>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <View>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
