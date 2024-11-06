import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView style={[{ marginTop: headerHeight }]}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
