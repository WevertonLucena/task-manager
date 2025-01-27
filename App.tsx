/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskProvider } from './src/context/TaskContext';
import { TaskListScreen } from './src/screens/TaskListScreen';
import { AddTaskScreen } from './src/screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
    </TaskProvider>
  );
}

export default App;
