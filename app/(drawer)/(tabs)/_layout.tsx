import { AppColors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import { Bookmark, Compass, Home, User } from 'lucide-react-native';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';


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
        tabBarItemStyle: styles.tabItem,
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: 'Today',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Home color={focused ? AppColors.accent : color} size={21} strokeWidth={focused ? 2 : 1.75} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="collections/index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Compass color={focused ? AppColors.accent : color} size={21} strokeWidth={focused ? 2 : 1.75} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Bookmark color={focused ? AppColors.accent : color} size={21} strokeWidth={focused ? 2 : 1.75} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <User color={focused ? AppColors.accent : color} size={21} strokeWidth={focused ? 2 : 1.75} />
            </View>
          ),
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
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 24 : 16,
    left: 24,
    right: 24,
    borderRadius: 32,
    height: Platform.OS === 'ios' ? 72 : 64,
    backgroundColor: 'rgba(255,255,255,0.96)',
    shadowColor: '#1E1209',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.16,
    shadowRadius: 28,
    elevation: 16,
    borderTopWidth: 0,
    paddingBottom: Platform.OS === 'ios' ? 12 : 4,
    paddingTop: 8,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  tabItem: {
    paddingTop: 4,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapActive: {
    backgroundColor: AppColors.accentLight,
  },
});
