import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  
  const todos = useQuery(api.todos.getTodos);
  console.log(todos);

  const addTodo = useMutation(api.todos.addTodo);
  
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.1234</Text>
      <Text>hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({ text: "walk the dog" })}>
        <Text>Add a new todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  content: {
    fontSize: 22,
  },
});

