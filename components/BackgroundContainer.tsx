import { AppColors } from '@/constants/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface BackgroundContainerProps {
  children: React.ReactNode;
  color?: string;
}

export default function BackgroundContainer({ children, color }: BackgroundContainerProps) {
  return (
    <View style={[styles.container, { backgroundColor: color ?? AppColors.background }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
