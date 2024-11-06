import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
const Explore = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={[styles.container, { marginTop: headerHeight }]}>
      <Text>Explore</Text>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
