import GlassTabBar from '@/components/GlassTabBar';
import { Tabs } from 'expo-router';
import { Bookmark, Compass, Home, User } from 'lucide-react-native';
import React from 'react';

export default function TabLayout() {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <GlassTabBar {...props} />}>
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: 'Today',
          tabBarIcon: ({ color, focused }) => (
            <Home color={color} size={22} strokeWidth={focused ? 2 : 1.6} />
          ),
        }}
      />
      <Tabs.Screen
        name="collections/index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <Compass color={color} size={22} strokeWidth={focused ? 2 : 1.6} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <Bookmark color={color} size={22} strokeWidth={focused ? 2 : 1.6} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <User color={color} size={22} strokeWidth={focused ? 2 : 1.6} />
          ),
        }}
      />
    </Tabs>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

