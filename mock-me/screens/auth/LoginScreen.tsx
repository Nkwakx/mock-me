import { View, Text, StyleSheet, TouchableOpacity,  KeyboardAvoidingView, SafeAreaView, TextInput, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { themes } from '../../constants/Themes'
import { AuthScreenProps, RootStackScreenProps } from '../../navigation/types'
import { useTheme } from '@react-navigation/native';
import Animated,{ FadeInUp, FadeInDown } from 'react-native-reanimated';
import PrimaryButton from '../../components/PrimaryButton';
import Artwork03 from '../../components/artworks/Artwork03';
import { LOG_IN_SCREEN } from '../../constants/ScreenDisplay';
import Icons from "@expo/vector-icons/MaterialIcons";
import { useAppDispatch } from '../../app/common/store';
import { useLoginMutation } from '../../app/features/api/apiAuthSlice';
import { setCredentials } from '../../app/features/auth/authSlice';

export default function LoginScreen({ navigation }: AuthScreenProps<'Login'>) {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, seterrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      console.log('handleLogin');
      const userDetails = await login({ phoneNumber, password }).unwrap();
      console.log('userDetails', userDetails);
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
          {/* <TouchableOpacity onPress={() => navigation.replace("Register")}>
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
          <Artwork03 width={240} height={240} />
        </Animated.View>

        <View style={{ padding: 24 }}>
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            style={{
              fontSize: 40,
              fontWeight: "800",
              color: theme.colors.text,
            }}
          >
            {LOG_IN_SCREEN.title}
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
            {LOG_IN_SCREEN.description}
          </Animated.Text>

          <View style={{ alignItems: "center", gap: 16, marginTop: 32 }}>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{ position: "relative", width: "100%" }}
            >
              <TextInput
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
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
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
                  marginBottom: 16,
                }}
                onChangeText={(password) => setPassword(password)}
              />
              <Icons
                name="lock"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  left: 12,
                  top: 12,
                  opacity: 0.5,
                }}
              />
              <View style={styles.forgotPassword}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                >
                  <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
            >
              <PrimaryButton
                label="Log In"
                onPress={handleLogin}
              />
            </Animated.View>
            <View style={styles.row}>
              <Text>Don’t have an account? </Text>
              <TouchableOpacity onPress={() => navigation.replace('Register')}>
                <Text style={styles.link}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: themes.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: themes.colors.primary,
  },
})