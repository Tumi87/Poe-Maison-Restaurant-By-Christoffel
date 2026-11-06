import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { MenuProvider } from './src/context/MenuContext';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import AddDishScreen from './src/screens/AddDishScreen';
import ChefMenuScreen from './src/screens/ChefMenuScreen';
import ItemDetailsScreen from './src/screens/ItemDetailsScreen';
import EditDishScreen from './src/screens/EditDishScreen';
import type { RootStackParamList } from './src/navigation/types';

export type { RootStackParamList };

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="ChefMenu" component={ChefMenuScreen} />
            <Stack.Screen name="AddDish" component={AddDishScreen} />
            <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
            <Stack.Screen name="EditDish" component={EditDishScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </SafeAreaProvider>
  );
}
