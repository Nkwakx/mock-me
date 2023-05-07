import { View, KeyboardAvoidingView, SafeAreaView, TextInput, TouchableOpacity, useWindowDimensions, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import PrimaryButton from '../../components/PrimaryButton';
import Icons from "@expo/vector-icons/MaterialIcons";
import Artwork02 from '../../components/artworks/Artwork02';
import { useAppDispatch } from '../../app/common/store';
import { useRegisterMutation } from '../../app/features/api/apiAuthSlice';
import { setCredentials } from '../../app/features/auth/authSlice';
import { themes } from '../../constants/Themes';
import { AuthScreenProps } from '../../navigation/types';

export default function RegisterScreen({ navigation }: AuthScreenProps<"Register">) {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [LastName, setLastName] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');
  const [errorMessage, seterrorMessage] = useState('');

  const handleSignup = async () => {
    console.log('handleSignup');
    try {
      const userDetails = await register({ PhoneNumber, Password, LastName, FirstName, EmailAddress }).unwrap();
      dispatch(setCredentials(userDetails));
      setPhoneNumber('');
      setPassword('');
    } catch (error: any) {
      if (error.originalStatus === 400) {
        seterrorMessage('Missing Username or Password');
      } else if (error.status === 401) {
        seterrorMessage('Unauthorised');
      } else {
        seterrorMessage('Login Failed');
      }
      // errorRef.current.focus()
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
          minHeight: dimensions.height,
        }}
      >
        {/* It Works! */}
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            marginTop: 100,
            paddingHorizontal: 24,
            height: 52,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {/* <TouchableOpacity onPress={() => navigation.replace("Login")}>
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity> */}
        </Animated.View>

        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Artwork02 width={240} height={240} />
        </Animated.View>

        <View style={{ padding: 24 }}>

          <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>

            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                onChangeText={(firstName) => setFirstName(firstName)}
                placeholder="First Name"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
              />
              <Icons
                name="person"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                onChangeText={(lastName) => setLastName(lastName)}
                placeholder="Last Name"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
              />
              <Icons
                name="person"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                placeholder="Phone Number"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
              />
              <Icons
                name="call"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>


            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                onChangeText={(email) => setEmailAddress(email)}
                placeholder="Email-address"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
              />
              <Icons
                name="email"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
                placeholder="Password"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
              />
              <Icons
                name="lock"
                size={24}
                color={theme.colors.text}
                style={styles.icon}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
            >
              <PrimaryButton
                label="Sign Up"
                onPress={handleSignup}
              />
            </Animated.View>
            <View style={styles.row}>
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.replace('Login')}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 12,
    top: 12,
    opacity: 0.5,
  },
  input: {

  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: themes.colors.primary,
  },
})