import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

interface TaskItemProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ title, completed, onToggle }) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    taskItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: theme.borderColor,
    },
    checkbox: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.primaryColor,
      marginRight: 10,
    },
    checked: {
      backgroundColor: theme.primaryColor,
    },
    taskText: {
      fontSize: 16,
      color: theme.textColor,
    },
    completedTaskText: {
      textDecorationLine: 'line-through',
      color: theme.secondaryColor,
    },
  });

  return (
    <TouchableOpacity style={styles.taskItem} onPress={onToggle}>
      <View style={[styles.checkbox, completed && styles.checked]} />
      <Text style={[styles.taskText, completed && styles.completedTaskText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
