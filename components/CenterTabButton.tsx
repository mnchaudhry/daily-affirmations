import { AppColors } from '@/constants/theme';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface CenterTabButtonProps {
  children: React.ReactNode;
  onPress?: (...args: unknown[]) => void;
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function CenterTabButton({ children, onPress }: CenterTabButtonProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <TouchableOpacity style={styles.centerTabWrapper} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.centerTabCircle}>{children}</View>
    </TouchableOpacity>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  centerTabWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTabCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: AppColors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -14 }],
    shadowColor: AppColors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
});
