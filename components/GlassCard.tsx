import React from 'react';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const CARD_HEIGHT = height * 0.6;

interface GlassCardProps {
  text: string;
  category?: string;
  index: number;
}

export default function GlassCard({ text, category = 'Daily Thought', index }: GlassCardProps) {
  return (
    <Animated.View 
      entering={FadeInDown.delay(index * 100).springify()}
      style={styles.cardContainer}
    >
      <BlurView intensity={80} tint="light" style={styles.blurContainer}>
        <LinearGradient
          colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.1)']}
          style={styles.gradientBorder}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.innerContent}>
            <View style={styles.header}>
              <Text style={styles.category}>{category.toUpperCase()}</Text>
              <View style={styles.scrim} />
            </View>
            
            <Text style={styles.text}>{text}</Text>

            <View style={styles.footer}>
              <Text style={styles.brand}>Daily Affirmations</Text>
            </View>
          </View>
        </LinearGradient>
      </BlurView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 30,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  blurContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradientBorder: {
    flex: 1,
    padding: 2, // Border width effect
  },
  innerContent: {
    flex: 1,
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)', // Subtle tint
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  scrim: {
    position: 'absolute',
    top: -10,
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    color: 'rgba(0,0,0,0.4)',
    marginTop: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: '300',
    textAlign: 'center',
    color: '#333',
    lineHeight: 44,
    fontFamily: Platform.select({ ios: 'Georgia', android: 'serif' }),
  },
  footer: {
    opacity: 0.5,
  },
  brand: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
