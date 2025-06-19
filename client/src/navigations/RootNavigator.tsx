import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Announcement from '../screens/stack/announcement/Announcement';
const RootNavigator = () => {
 
    const Stack = createNativeStackNavigator()
    
    return (
        <View className="background flex-1">
          <Stack.Navigator
            screenOptions={{
              headerShown: false, 
              animation: 'ios_from_right',
            }}
          >
            <Stack.Screen name="tab" component={TabNavigator} />
            <Stack.Screen name='Announcement' component={Announcement}/>
          </Stack.Navigator>
        </View>
    )
}

export default RootNavigator
