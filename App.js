
import React from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import CountPage from './modules/count/count.page';
import LoginPage from './modules/login/login.page';
import Register  from './modules/registration/register.page';
import Dashboard from './modules/dashboard/dashboard.page';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { List, ListItem, Icon, Thumbnail,
  Container, Header, Title, Content,
  FooterTab, Button, Left, Right, Body , Badge} from 'native-base';

import AsyncStorage from '@react-native-community/async-storage'

const HomeStack = createStackNavigator();


const App = () => {

  return (
    // <Provider store={store}>
     <Container>
        <View style={[styles.container, { flexDirection: "column", justifyContent:"center"}]}>
        <NavigationContainer >
          <HomeStack.Navigator>
            <HomeStack.Screen 
                name="LoginPage" 
                component={LoginPage} 
                />
              <HomeStack.Screen 
                  name="Register" 
                  component={Register} 
                  options={{ title: 'Trở về LoginPgae' }}
                />
                <HomeStack.Screen 
                  name="Dashboard" 
                  component={Dashboard} 
                  options={{ title: 'Trở về LoginPgae' }}
                />
              </HomeStack.Navigator>
          </NavigationContainer>
        </View>
      </Container>
    /* </Provider> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 20,
  },
});

export default App;
