
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { RootStackParamList } from './types';
import AuthNavigator from './AuthNavigator';
import { BottomNavigation } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useAppSelector } from '../app/common/store';
import FavoriteScreen from '../screens/FavoriteScreen';
import PocketScreen from '../screens/PocketScreen';

export default function Navigation() {
      return (
            <NavigationContainer>
                  <RootNavigator />
            </NavigationContainer>
      )
}
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
      const user = useAppSelector((state) => state.userState);
      return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                  {user.access_token == null ? (
                        <Stack.Screen name="Auth" component={AuthNavigator} />
                  ) : (
                        <>
                              <Stack.Screen name="Root" component={BottomTabNavigator} />
                              <Stack.Screen name="Auth" component={AuthNavigator} />
                        </>
                  )}
            </Stack.Navigator>
      );
}

const BottomTabNavigator = () => {
      const [index, setIndex] = React.useState(0);
      const [routes] = React.useState([
            { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home' },
            { key: 'pocket', title: 'Pocket', focusedIcon: 'wallet' },
            { key: 'favorite', title: 'Favorite', focusedIcon: 'star' },
            { key: 'profile', title: 'Profile', focusedIcon: 'user', unfocusedIcon: 'user' },
      ]);

      const renderScene = BottomNavigation.SceneMap({
            home: HomeScreen as any,
            pocket: PocketScreen,
            favorite: FavoriteScreen,
            profile: ProfileScreen,
      });

      return (
            <BottomNavigation
                  navigationState={{ index, routes }}
                  onIndexChange={setIndex}
                  renderScene={renderScene}
            />
      );
};