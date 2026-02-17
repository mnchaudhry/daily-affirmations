import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function GratitudeJarIllustration() {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={styles.illustrationContainer}>
      <Text style={styles.jarEmoji}>🫙</Text>
      <View style={styles.heartsRow}>
        <Text style={styles.heartEmoji}>❤️</Text>
        <Text style={styles.heartEmoji}>❤️</Text>
        <Text style={styles.heartEmoji}>❤️</Text>
      </View>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  illustrationContainer: {
    marginTop: 20,
    marginBottom: 32,
    alignItems: 'center',
  },
  jarEmoji: {
    fontSize: 80,
  },
  heartsRow: {
    flexDirection: 'row',
    gap: 4,
    marginTop: -24,
    marginLeft: 8,
  },
  heartEmoji: {
    fontSize: 18,
  },
});
