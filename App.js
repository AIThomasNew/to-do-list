import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/components/Navbar';
import MainScreen from './src/screens/MainScreen';
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null); // изначально ноль
  const [todos, setTodos] = useState([
    {
      id: '1',
      title: 'Стать Senior Developer',
    },
    {
      id: '2',
      title: 'Стать рок-звездой разработки',
    },
  ]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev, // развернуть предыдущий
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  // если есть todoId
  if (todoId !== null) {
    content = <TodoScreen goBack={() => setTodoId(null)} />;
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});
