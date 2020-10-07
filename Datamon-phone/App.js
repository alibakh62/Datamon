import 'react-native-gesture-handler'
import * as React from 'react';
import Projects from './screens/Projects'
import Landing from './screens/Landing'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer'

const Stack = createStackNavigator();

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
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
    </StateProvider>
  );
};

export default App;