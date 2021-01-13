import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

const Full = createStackNavigator()

import Usuario from './screens/Usuario';
import CreateUsuario from './screens/CreateUsuario'
import PerfilUsuario from './screens/PerfilUsuario'

function MyFull(){
  return(
    <Full.Navigator>
      <Full.Screen name="PerfilUsuario" component={PerfilUsuario}/>
      <Full.Screen name="Usuario" component={Usuario}/>
      <Full.Screen name="CreateUsuario" component={CreateUsuario}/>
    </Full.Navigator>
  )
} 

export default function App() {
  return (
    <NavigationContainer>
      <MyFull/>
    </NavigationContainer>
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
