import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import { useTaskContext } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/CustomButton';

export const AddTaskScreen = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTaskContext();
  const { theme } = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.backgroundColor,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: theme.textColor,
    },
    input: {
      borderWidth: 1,
      borderColor: theme.borderColor,
      padding: 15,
      borderRadius: 5,
      fontSize: 16,
      marginBottom: 20,
      backgroundColor: theme.inputBackground,
      color: theme.textColor,
    },
  });

  const handleAddTask = () => {
    if (title.trim()) {
      addTask(title.trim());
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Task</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
        placeholderTextColor={theme.secondaryColor}
        autoFocus
      />
      <CustomButton
        title="Add Task"
        onPress={handleAddTask}
        size="large"
      />
    </View>
  );
};
