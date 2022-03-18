import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Scanner from './screens/Scanner';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

//expo-barcode-scanner
//@react-navigation/stack
//@react-navigation/native
//설치를해야합니다.

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scanner" component={Scanner} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}