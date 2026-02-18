import { AppColors, Fonts } from '@/constants/theme';
import HomeDecor from '@/src/components/HomeDecor';
import QuoteCard from '@/src/components/QuoteCard';
import { useSaved } from '@/src/store/savedStore';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated, {
    FadeIn,
    FadeInDown,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withSequence,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

//////////////////////////////////////////// SUB-COMPONENTS ////////////////////////////////////////////

function EmptyState() {
  const floatY   = useSharedValue(0);
  const heartScale = useSharedValue(0.5);
  const heartOpac = useSharedValue(0);

  useEffect(() => {
    // Float the heart up and down
    floatY.value = withRepeat(
      withSequence(
        withTiming(-12, { duration: 1800 }),
        withTiming(0,  { duration: 1800 }),
      ),
      -1,
      true,
    );
    // Pop in
    heartScale.value = withDelay(200, withSpring(1, { damping: 6, stiffness: 160 }));
    heartOpac.value  = withDelay(200, withTiming(1, { duration: 400 }));
  }, []);

  const heartStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: floatY.value }, { scale: heartScale.value }],
    opacity: heartOpac.value,
  }));

  return (
    <Animated.View entering={FadeIn.delay(300).duration(500)} style={styles.empty}>
      <Animated.Text style={[styles.emptyIcon, heartStyle]}>♡</Animated.Text>
      <Animated.Text entering={FadeInDown.delay(500).duration(400)} style={styles.emptyTitle}>
        Nothing saved yet
      </Animated.Text>
      <Animated.Text entering={FadeInDown.delay(650).duration(400)} style={styles.emptyBody}>
        Tap the heart on any quote to save it here for easy access.
      </Animated.Text>
    </Animated.View>
  );
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function SavedScreen() {
  const { saved } = useSaved();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient
        colors={['#F8EDD8', '#EDE4CC', '#E8DCC0'] as const}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
      />
      <HomeDecor />
      <SafeAreaView style={styles.safeArea}>
        <Animated.View entering={FadeInDown.duration(400).springify()} style={styles.header}>
          <Text style={styles.title}>Saved</Text>
          {saved.length > 0 && (
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{saved.length}</Text>
            </View>
          )}
        </Animated.View>
        <FlatList
          data={saved}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInDown.delay(index * 50).duration(350)}>
              <QuoteCard quote={item} variant="list" />
            </Animated.View>
          )}
          contentContainerStyle={[styles.list, saved.length === 0 && styles.listEmpty]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyState />}
        />
      </SafeAreaView>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: AppColors.textPrimary,
    fontFamily: Fonts.serif,
    letterSpacing: 0.1,
  },
  countBadge: {
    backgroundColor: AppColors.accentWarm,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  countText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fff',
  },
  list: { paddingBottom: 120 },
  listEmpty: { flex: 1 },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 72,
    color: AppColors.accentWarm,
    lineHeight: 86,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: AppColors.textPrimary,
    textAlign: 'center',
    fontFamily: Fonts.serif,
  },
  emptyBody: {
    fontSize: 14,
    color: AppColors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 240,
  },
});
