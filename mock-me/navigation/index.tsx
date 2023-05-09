import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabsNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import AuthNavigator from "./AuthNavigator";
import { useAppSelector } from "../app/common/store";

export default function Navigation() {
      return (
            <NavigationContainer>
                  <RootNavigator />
            </NavigationContainer>
      )
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
      const user = useAppSelector((state) => state.auth);
      return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                  {user.access_token != null ? (
                        <Stack.Screen name="Auth" component={AuthNavigator} />
                  ) : (
                        <>
                              <Stack.Screen name="RootTabs" component={BottomTabNavigator} options={{ headerShown: true }} />
                        </>
                  )}
            </Stack.Navigator>
      )
}

