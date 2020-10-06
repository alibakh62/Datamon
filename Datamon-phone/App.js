import 'react-native-gesture-handler';
import * as React from 'react';
import Projects from './screens/Projects'
import Landing from './screens/Landing'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Projects}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="Landing" 
          component={Landing} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;