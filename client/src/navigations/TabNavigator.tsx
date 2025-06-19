import { Platform, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/tab/HomeScreen';
import ProfileScreen from '../screens/tab/ProfileScreen';
import { Ionicons, FontAwesome, Octicons } from '@expo/vector-icons';
import Section from '../components/custom tags/Section';
import Main from '../components/custom tags/Main';
import View from '../components/custom tags/View';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Text from '../components/custom tags/Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
 const insets = useSafeAreaInsets();

  return (
    <View className="flex-row foreground main rounded-3xl py-6 flex items-center justify-around">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;
        const isFocused = state.index === index;

        let iconName: string = '';
        let IconComponent: any = Ionicons;

        if (route.name === 'Home') {
          iconName = 'home';
          IconComponent = Octicons;
        } else if (route.name === 'Profile') {
          iconName = 'user-o';
          IconComponent = FontAwesome;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            className="flex-1 items-center justify-center gap-1"
          >
            <IconComponent
              name={iconName}
              size={wp(5)}
              className={`${isFocused?'!text-primary':'!text-gray-300'}`}
            />
            <Text className={`!text-xs ${isFocused ? 'text-primary' : 'text-gray-300'}`}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const HeaderProfile = () =>{
  return(
    <Section className='!pt-0 !pb-3 background'>
      <Main>
        <View className='flex flex-row justify-between items-center'>
          <View className='flex flex-row items-center gap-2 w-fit '>
            <View className='p-5 rounded-full foreground m-auto'>
              <Text>M</Text>
            </View>
            <View className='flex gap-1'>
              <Text type='subHeading' className=' capitalize heading'>mohammed nowfal</Text>
              <Text className=' capitalize paragraph'>ramanathapuram</Text>
            </View>
          </View>
          <View>
            <Octicons name='bell' size={wp(5)} className='heading'/>
          </View>
        </View>
      </Main>
    </Section>
  )
}

const TabNavigator = () => {
  return (
    <View className='flex-1 gap-2 background'>
    <HeaderProfile/>
        <Tab.Navigator   screenOptions={{headerShown:false, animation:Platform.OS == 'ios'?'shift':'none'}}
      tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen}  />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;
