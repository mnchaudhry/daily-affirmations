import { AppColors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import { Bookmark, Compass, Home, User } from 'lucide-react-native';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';


export default function TabLayout() {

  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: AppColors.accent,
        tabBarInactiveTintColor: AppColors.textMuted,
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: 'Today',
          tabBarIcon: ({ color }) => <Home color={color} size={22} strokeWidth={1.75} />,
        }}
      />
      <Tabs.Screen
        name="collections/index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <Compass color={color} size={22} strokeWidth={1.75} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => <Bookmark color={color} size={22} strokeWidth={1.75} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User color={color} size={22} strokeWidth={1.75} />,
        }}
      />
      {/* Hide practice tab - kept for file-routing compatibility */}
      <Tabs.Screen
        name="practice/index"
        options={{ href: null }}
      />
    </Tabs>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: AppColors.tabBar,
    borderTopWidth: 1,
    borderTopColor: AppColors.border,
    height: Platform.OS === 'ios' ? 85 : 65,
    paddingBottom: Platform.OS === 'ios' ? 20 : 8,
    paddingTop: 8,
    elevation: 0,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
});
