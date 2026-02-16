import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Moods } from '@/constants/theme';

const { width, height } = Dimensions.get('window');

type MoodType = keyof typeof Moods;

interface BackgroundContainerProps {
  mood?: MoodType;
  children: React.ReactNode;
}

export default function BackgroundContainer({ mood = 'morning', children }: BackgroundContainerProps) {
  const currentMood = Moods[mood];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={currentMood.colors}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      
      {/* Mesh Gradient Overlay (Simulated with multiple gradients) */}
      <LinearGradient
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.2)']}
        style={[styles.overlay, { width: width * 1.5, height: height * 1.5, top: -100, left: -100 }]}
        start={{ x: 0.8, y: 0.2 }}
        end={{ x: 0.2, y: 0.8 }}
      />

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    opacity: 0.6,
    borderRadius: 999, // Make it circular/blobby
    transform: [{ rotate: '45deg' }],
  },
});
