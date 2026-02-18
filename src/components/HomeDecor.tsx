import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width: W, height: H } = Dimensions.get('window');

/**
 * Ambient glow layers to keep the background alive without using photo assets.
 */
export default function HomeDecor() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {/* Upper-right glow */}
      <View style={styles.topOrb}>
        <LinearGradient
          colors={['rgba(255,255,255,0.85)', 'rgba(255,255,255,0)']}
          style={StyleSheet.absoluteFill}
          start={{ x: 0.15, y: 0.2 }}
          end={{ x: 0.8, y: 0.85 }}
        />
      </View>

      {/* Mid ribbon */}
      <View style={styles.midRibbon}>
        <LinearGradient
          colors={[
            'rgba(249, 209, 170, 0.45)',
            'rgba(255, 235, 204, 0.2)',
            'rgba(255, 255, 255, 0)',
          ]}
          style={StyleSheet.absoluteFill}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 1, y: 0.9 }}
        />
      </View>

      {/* Lower-left glow */}
      <View style={styles.bottomOrb}>
        <LinearGradient
          colors={['rgba(255, 210, 173, 0.5)', 'rgba(255,255,255,0)']}
          style={StyleSheet.absoluteFill}
          start={{ x: 0.4, y: 0.1 }}
          end={{ x: 0.8, y: 0.9 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topOrb: {
    position: 'absolute',
    top: -W * 0.35,
    right: -W * 0.1,
    width: W * 0.95,
    height: W * 0.95,
    borderRadius: W,
    overflow: 'hidden',
  },
  midRibbon: {
    position: 'absolute',
    top: H * 0.22,
    left: -W * 0.15,
    width: W * 1.3,
    height: H * 0.4,
    borderRadius: W,
    transform: [{ rotate: '-8deg' }],
    overflow: 'hidden',
  },
  bottomOrb: {
    position: 'absolute',
    bottom: -H * 0.35,
    left: -W * 0.25,
    width: W * 1.2,
    height: W * 1.2,
    borderRadius: W,
    overflow: 'hidden',
  },
});
