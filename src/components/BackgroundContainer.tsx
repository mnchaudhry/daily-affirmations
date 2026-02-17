import { AppColors } from '@/constants/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface BackgroundContainerProps {
  children: React.ReactNode;
  color?: string;
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function BackgroundContainer({ children, color }: BackgroundContainerProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={[styles.container, { backgroundColor: color ?? AppColors.background }]}>
      {children}
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
