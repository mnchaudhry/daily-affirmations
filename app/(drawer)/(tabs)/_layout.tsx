import { AppColors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import { BookOpen, Brain, Home, RefreshCw, User } from 'lucide-react-native';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

function CenterTabButton({ children, onPress }: { children: React.ReactNode; onPress?: (...args: unknown[]) => void }) {
  return (
    <TouchableOpacity style={styles.centerTabWrapper} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.centerTabCircle}>{children}</View>
    </TouchableOpacity>
  );
}

export default function TabLayout() {
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
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} size={22} strokeWidth={1.75} />,
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: 'Freud AI',
          tabBarIcon: ({ color }) => <Brain color={color} size={22} strokeWidth={1.75} />,
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          title: '',
          tabBarIcon: () => <RefreshCw color="#fff" size={22} strokeWidth={1.75} />,
          tabBarButton: (props) => <CenterTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Resources',
          tabBarIcon: ({ color }) => <BookOpen color={color} size={22} strokeWidth={1.75} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <User color={color} size={22} strokeWidth={1.75} />,
        }}
      />
    </Tabs>
  );
}

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
  centerTabWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTabCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: AppColors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -12 }],
    shadowColor: AppColors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
});
