import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import loglogin from './src/Login';
import Forgot from './src/ForgotPassword';
import SplashScreen from './src/SplashScreen';
import Profile from './src/Profile';
import MainPage from './src/MainPage';
import TabNav from './src/TabNav';
import F from './src/F';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({

  F: { screen: F },
  Login: { screen: loglogin },
  ForgotPassword: { screen: Forgot },
  SplashScreen: { screen: SplashScreen },
  MainPage: { screen: MainPage },
  Profile: { screen: Profile },
  TabNav: { screen: TabNav }



},
  {
    initialRouteName: 'F',
    header: null,
    headerMode: 'none'
  }

);

const AppContainer = createAppContainer(AppStackNavigator);
