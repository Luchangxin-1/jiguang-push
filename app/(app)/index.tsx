import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "@/context/ctx";
import { router } from "expo-router";
const Index = () => {
  const headerHeight = useHeaderHeight();
  const { signOut } = useSession();
  return (
    <SafeAreaView style={[styles.container, { marginTop: headerHeight }]}>
      <Text>Explore</Text>
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
      >
        <Text>退出登录</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
