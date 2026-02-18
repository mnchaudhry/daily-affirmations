import { AppColors, Fonts } from '@/constants/theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function GlassTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.shell, { paddingBottom: Math.max(insets.bottom, 12) + 8 }]} pointerEvents="box-none">
      <LinearGradient
        colors={[AppColors.surface, '#FFF5E8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.bar}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const rawLabel =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const label = typeof rawLabel === 'string' ? rawLabel : route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const icon =
            options.tabBarIcon?.({
              focused: isFocused,
              color: isFocused ? AppColors.accent : AppColors.textMuted,
              size: 22,
            }) ?? null;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
              activeOpacity={0.85}
            >
              <View style={[styles.iconWrap, isFocused && styles.iconWrapActive]}>{icon}</View>
              <Text style={[styles.label, isFocused ? styles.labelActive : styles.labelInactive]}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 36,
    paddingHorizontal: 22,
    paddingVertical: 14,
    shadowColor: '#C08A5C',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 24,
    gap: 12,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapActive: {
    backgroundColor: AppColors.accentLight,
  },
  label: {
    fontSize: 11,
    fontFamily: Fonts.sans,
    letterSpacing: 0.2,
  },
  labelActive: {
    color: AppColors.accent,
    fontWeight: '700',
  },
  labelInactive: {
    color: AppColors.textMuted,
    fontWeight: '600',
  },
});
