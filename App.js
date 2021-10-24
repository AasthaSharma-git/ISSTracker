import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MeteorScreen from './screens/MeteorScreen';
import ISSLocationScreen from './screens/ISSLocationScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack=createStackNavigator();


 function App (){
   return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Meteor" component={MeteorScreen}></Stack.Screen>
        <Stack.Screen name="ISS" component={ISSLocationScreen}></Stack.Screen>
    </Stack.Navigator>

</NavigationContainer>
   );
   
    
}

export default App;
