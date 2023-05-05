import { useTheme } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

const PrimaryButton = ({ onPress, label, style, labelStyle }: any) => {
      const theme = useTheme();
      return (
            <TouchableOpacity
                  onPress={onPress}
                  style={[
                        {
                              backgroundColor: theme.colors.primary,
                              paddingHorizontal: 32,
                              height: 52,
                              width: 300,
                              borderRadius: 100,
                              alignItems: "center",
                              justifyContent: "center",
                        },
                        style,
                  ]}>
                  <Text
                        style={[
                              {
                                    fontSize: 16, fontWeight: "700", color: theme.colors.background
                              },
                              labelStyle
                        ]}>
                        {label}
                  </Text>
            </TouchableOpacity>
      )
}

export default PrimaryButton;