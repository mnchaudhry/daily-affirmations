import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundContainer from '@/components/BackgroundContainer';
import { Play } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

export default function Practice() {
  const scale = useSharedValue(1);

  React.useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, { duration: 4000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <BackgroundContainer mood="night">
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Breathe</Text>
        
        <View style={styles.centerContent}>
            <Animated.View style={[styles.circle, animatedStyle]}>
                <BlurView intensity={30} tint="light" style={styles.blurCircle}>
                    <Text style={styles.breatheText}>Inhale</Text>
                </BlurView>
            </Animated.View>
            
            <TouchableOpacity style={styles.startButton}>
                <Play color="#fff" fill="#fff" size={24} />
                <Text style={styles.startText}>Start Session</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#fff',
    alignSelf: 'center',
    marginTop: 40,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 60,
  },
  circle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  blurCircle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  breatheText: {
    fontSize: 24,
    fontWeight: '200',
    color: '#fff',
    letterSpacing: 4,
    textTransform: 'uppercase',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    gap: 10,
  },
  startText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  }
});
