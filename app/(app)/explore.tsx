import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
const Explore = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={[styles.container, { marginTop: headerHeight }]}>
      <Text className="bg-red-200">Explore</Text>
      <Link href={"/profile"} asChild>
        <Pressable>
          <Text>go to profile</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
