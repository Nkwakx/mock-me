import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import Icons from '@expo/vector-icons/MaterialIcons'
import React from 'react';
import FavoriteScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import PocketScreen from '../screens/PocketScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomBottomTabs from '../components/CustomBottomTabs';
import { BottomTabsStackParamList } from './types';


const TabStack = createBottomTabNavigator<BottomTabsStackParamList>();

const BottomTabNavigator = () => {
      return (
            <TabStack.Navigator screenOptions={{ tabBarShowLabel: false }} tabBar={(props) => <CustomBottomTabs {...props} />}>
                  <TabStack.Screen 
                  name="Home" 
                  component={HomeScreen as unknown as React.ComponentType<BottomTabScreenProps<BottomTabsStackParamList, "Home">>} 
                  options={{ 
                        headerShown: false, 
                        tabBarIcon(props) { 
                              return <Icons name="home" {...props} /> 
                              } 
                        }} 
                  />
                  <TabStack.Screen 
                  name="Pocket"
                  component={PocketScreen}
                  options={{ 
                        headerShown: false, 
                        tabBarIcon(props) { 
                              return <Icons name="money" {...props} /> 
                              } 
                        }} 
                  />
                  <TabStack.Screen 
                  name="Favorite"
                  component={FavoriteScreen}
                  options={{ 
                        headerShown: false, 
                        tabBarIcon(props) { 
                              return <Icons name="favorite" {...props} /> 
                              } 
                        }} 
                  />
                  <TabStack.Screen 
                  name="Profile"
                  component={ProfileScreen}
                  options={{ 
                        headerShown: false, 
                        tabBarIcon(props) { 
                              return <Icons name="person" {...props} /> 
                              } 
                        }} 
                  />
                  
            </TabStack.Navigator>
      );
};

export default BottomTabNavigator;