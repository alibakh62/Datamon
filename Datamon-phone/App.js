import 'react-native-gesture-handler'
import * as React from 'react';
import Projects from './screens/Projects'
import Landing from './screens/Landing'
import Login from './screens/Login'
import ProjectSignUp from './screens/ProjectSignUp'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer'

const Stack = createStackNavigator();

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProjectSignUp">
          <Stack.Screen
            name="Home"
            component={Projects}
            options={{ title: 'Projects' }}
          />
          <Stack.Screen 
            name="Landing" 
            component={Landing} 
          />
          <Stack.Screen 
            name="Login" 
            component={Login} 
          />
          <Stack.Screen 
            name="ProjectSignUp" 
            component={ProjectSignUp} 
            options={{ title: 'Project Signup'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;