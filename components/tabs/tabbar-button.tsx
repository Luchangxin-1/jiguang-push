import {
  View,
  Text,
  Pressable,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import React, { useEffect } from "react";
import { icons } from "@/assets/icons/icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
interface TabBarButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  onLongPress: (event: GestureResponderEvent) => void;
  isFocused: boolean;
  routeName: string;
  label: string;
  color: string;
}
const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  label,
  color,
}: TabBarButtonProps) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Animated.View style={[animatedIconStyle]}>
        {icons[routeName]({
          color: isFocused ? "rgb(106, 90, 205)" : "#222",
        })}
      </Animated.View>

      <Animated.Text
        style={[
          {
            color,
            fontSize: 11,
            fontFamily: "ZCool",
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBarButton;
