import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import JPush from 'jpush-react-native';
export default function TabLayout() {
  const colorScheme = useColorScheme();
  useEffect(()=>{
    // 注册消息推送
    JPush.init({
      appKey: "edb9ffe407ab93692826dec4", // 填写自己项目的AppKey
      channel: "dev", // 配置推送channel渠道名称, 指明应用程序包的下载渠道，为方便分渠道统计，具体值由你自行定义，如华为应用市场等。本次使用dev
      production:false
    });
    
    // 监听消息推送是否注册成功
    JPush.addConnectEventListener((r) => {
        if(r.connectEnable){
          JPush.getRegistrationID(r=>{
            console.log(`registerID: ${r.registerID}`);
          })
        }
      });
      JPush.addNotificationListener(r=>{
        console.log(JSON.stringify(r)) // 此处仅作为演示处理
      })
  },[]) 

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
