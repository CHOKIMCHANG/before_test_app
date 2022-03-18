import * as React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Fontisto } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

import Scanner from './screens/Scanner'; 
import MapScene from './screens/MapShow';

export default function App() {
  
  return (
    <NavigationContainer> 
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'SCANNER':
                iconName = focused ? 'nav-icon-list-a' : 'nav-icon-list-a';
                break;
              case 'MAP':
                iconName = focused ? 'map' : 'map';
                break;
              default : 
              iconName = 'trash';
            }
            return <Fontisto name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
        })} initialRouteName="SCANNER"> 
        <Tab.Screen name="SCANNER" component={Scanner} options={{ title: 'Scanner', headerShown: false }}/>
        <Tab.Screen name="MAP" component={MapScene} options={{ title: 'Map', headerShown: false}}/>
      </Tab.Navigator> 
    </NavigationContainer> 
  ); 
}
