import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { RootStackScreenProps } from '../navigation/types';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { INTRO_SCREEN_01 } from '../constants/ScreenDisplay';
import Artwork01 from '../components/artworks/Artwork01';
import PrimaryButton from '../components/PrimaryButton';
import ScreenIndicators from '../components/ScreenIndicators';
import { getusers } from '../app/features/user/userSlice';
import { useAppSelector, useAppDispatch } from '../app/common/store';

export default function HomeScreen({ navigation }: RootStackScreenProps<'RootTabs'>) {
  const theme = useTheme();
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();


  useFocusEffect(
    React.useCallback(() => {
      const users = dispatch(getusers());
      console.log(users, "All users");

    }, [dispatch])
  );

  
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
      <Animated.View
        entering={FadeInUp.duration(1000).springify()}
        style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
      >
        <Artwork01 width={300} height={300} />
      </Animated.View>
      <View style={{ padding: 24 }}>
        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          style={{ fontSize: 40, fontWeight: "800", color: theme.colors.text }}
        >
          {users.length > 0 ? INTRO_SCREEN_01.title : "No users"}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(100).duration(1000).springify()}
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: theme.colors.text,
          }}
        >
          {INTRO_SCREEN_01.description}
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          {/* <ScreenIndicators count={3} activeIndex={0} /> */}
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: "center" }}
        >
          {/* <PrimaryButton
            label="Next"
            onPress={() => navigation.replace("Auth")}
          /> */}
        </Animated.View>
      </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
