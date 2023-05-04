import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
      namespace ReactNavigation {
            interface RootParamList extends RootStackParamList { }
      }
}

export type RootStackParamList = {
      Root: NavigatorScreenParams<RootTabParamList> | undefined;
      Home: undefined;
      Auth: undefined;
}
export type AuthStackParamList = {
      Landing: undefined;
      Login: undefined;
      Register: undefined;
      Home: undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;
export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, Screen>;

export type RootTabParamList = {
      Home: undefined;
      Pocket: undefined;
      Favorite: undefined;
      Profile: undefined;
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = 
CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>,
      NativeStackScreenProps<RootStackParamList>>;