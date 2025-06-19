import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./src/global.css"
import RootNavigator from './src/navigations/RootNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  })
  if(!fontsLoaded) return null

  DefaultTheme
  return (
    <SafeAreaProvider className='background flex-1'>
      <SafeAreaView className=' flex-1 background'>
        <NavigationContainer>
          <RootNavigator />
      </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
    
    // <SafeAreaProvider>
    //   <Screen>
    //   <View className='background flex-1'>
    //     <NavigationContainer>
    //     <RootNavigator />
    //     </NavigationContainer>
    //   </View>
    // </Screen>
    // </SafeAreaProvider>
  );
}

