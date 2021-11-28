import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AddTodo } from './src/AddTodo.js';
import { Navbar } from './src/Navbar.js';

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

        <View>
          {todos.map((todo) => {
            return <Text key={todo.id}> {todo.title} </Text>;
          })}
        </View>

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
