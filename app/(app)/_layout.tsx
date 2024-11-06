import { Redirect, Tabs, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useSession } from "@/context/ctx";
import TabBar from "@/components/tabs/tabbar";

export default function TabLayout() {
  const { session, isLoading } = useSession();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (isLoading || isRedirecting) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
        listeners={() => ({
          focus: (e) => {
            if (!session) {
              router.replace("/");
            }
          },
        })}
      />
    </Tabs>
  );
}
