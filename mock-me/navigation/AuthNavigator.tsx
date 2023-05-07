import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import { AuthStackParamList } from "./types";


const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
      return (
            <AuthStack.Navigator initialRouteName="Login" >
                  <AuthStack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                  />
                  <AuthStack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{ headerShown: false }}
                  />
            </AuthStack.Navigator>
      )
}
export default AuthNavigator;