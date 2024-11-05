import { Redirect, Tabs, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useSession } from "@/context/ctx";

export default function TabLayout() {
  const { session, isLoading } = useSession();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!isLoading && !session) {
      setIsRedirecting(true);
      router.replace("/");
    }
  }, [isLoading, session]);

  if (isLoading || isRedirecting) {
    return <Text>Loading...</Text>;
  }
  if (!session) {
    return <Redirect href="/" />;
  }
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
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
