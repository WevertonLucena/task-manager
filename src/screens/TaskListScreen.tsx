import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useTaskContext } from '../context/TaskContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/CustomButton';
import { TaskItem } from '../components/TaskItem';

export const TaskListScreen = () => {
  const { tasks, toggleTask, clearCompleted } = useTaskContext();
  const { theme, toggleTheme } = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.backgroundColor,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.textColor,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      gap: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <CustomButton
          title="+ Add Task"
          onPress={() => navigation.navigate('AddTask')}
          size="small"
        />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            title={item.title}
            completed={item.completed}
            onToggle={() => toggleTask(item.id)}
          />
        )}
      />

      <View style={styles.buttonContainer}>
        <CustomButton 
          title="Clear Completed"
          onPress={clearCompleted}
          variant="secondary"
        />
        <CustomButton 
          title={`Switch to ${theme.backgroundColor === '#121212' ? 'Light' : 'Dark'} Mode`}
          onPress={toggleTheme}
          variant="secondary"
        />
      </View>
    </View>
  );
};
