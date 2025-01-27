/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskProvider } from './src/context/TaskContext';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { TaskListScreen } from './src/screens/TaskListScreen';
import { AddTaskScreen } from './src/screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

function AppContent(): JSX.Element {
  const { isDarkMode, theme } = useTheme();

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.backgroundColor,
          },
          headerTintColor: theme.textColor,
        }}>
        <Stack.Screen 
          name="Tasks" 
          component={TaskListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="AddTask" 
          component={AddTaskScreen}
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <TaskProvider>
        <AppContent />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
