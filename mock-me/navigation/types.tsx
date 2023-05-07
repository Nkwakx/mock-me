import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type RootStackParamList = {
      RootTabs: NavigatorScreenParams<BottomTabsStackParamList> | undefined;
      Auth: NavigatorScreenParams<AuthStackParamList> | undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList>
      = NativeStackScreenProps<RootStackParamList, Screen>
      ;

export type AuthScreenProps<Screen extends keyof AuthStackParamList> = CompositeScreenProps<
      NativeStackScreenProps<AuthStackParamList, Screen>, RootStackScreenProps<"Auth">>;

export type RootTabScreenProps<Screen extends keyof BottomTabsStackParamList> = CompositeScreenProps<
      BottomTabScreenProps<BottomTabsStackParamList, Screen>, RootStackScreenProps<"RootTabs">>
      ;


export type BottomTabsStackParamList = {
      Home: undefined;
      Pocket: undefined;
      Favorite: undefined;
      Profile: undefined;
}
export type AuthStackParamList = {
      Login: undefined;
      Register: undefined;
}
