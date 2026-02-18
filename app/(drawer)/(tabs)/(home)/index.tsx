import { Fonts, getTimeOfDay, TimeThemes } from '@/constants/theme';
import HomeDecor from '@/src/components/HomeDecor';
import QuoteCard from '@/src/components/QuoteCard';
import { getQuoteOfTheDay, QUOTES } from '@/src/data/quotes';
import { useStreak } from '@/src/hooks/useStreak';
import { LinearGradient } from 'expo-linear-gradient';
import { Bell, RefreshCw } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

//////////////////////////////////////////// FUNCTIONS ////////////////////////////////////////////

function formatDate() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

function getRandomQuote(excludeId?: string) {
  const pool = QUOTES.filter((q) => q.id !== excludeId);
  return pool[Math.floor(Math.random() * pool.length)];
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function TodayScreen() {
  const streak = useStreak();
  const [quote, setQuote] = useState(getQuoteOfTheDay);
  const tod = getTimeOfDay();
  const theme = TimeThemes[tod];

  const handleRefresh = () => {
    setQuote((prev) => getRandomQuote(prev.id));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* ─── Gradient base ─────────────────────────────────────────────── */}
      <LinearGradient
        colors={theme.gradient}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
      />

      {/* ─── SVG botanical decorations ─────────────────────────────────── */}
      <HomeDecor />

      <SafeAreaView style={styles.safeArea}>
        {/* ─── Header ──────────────────────────────────────────────────── */}
        <Animated.View entering={FadeInDown.duration(500).springify()} style={styles.header}>
          <View style={styles.dateBlock}>
            <Text style={[styles.greeting, { color: theme.textColor }]}>
              {theme.greeting} {theme.greetingEmoji}
            </Text>
            <Text style={[styles.dateText, { color: theme.subtitleColor }]}>{formatDate()}</Text>
          </View>
          <View style={styles.headerRight}>
            {streak > 0 && (
              <View style={styles.streakBadge}>
                <Text style={styles.streakEmoji}>🔥</Text>
                <Text style={[styles.streakNum, { color: theme.textColor }]}>{streak}</Text>
              </View>
            )}
            <TouchableOpacity style={styles.iconBtn}>
              <Bell size={20} color={theme.subtitleColor} strokeWidth={1.5} />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          bounces={false}
        >
          {/* ─── Quote ─────────────────────────────────────────────────── */}
          <Animated.View entering={FadeInUp.delay(150).duration(600).springify()}>
            <QuoteCard quote={quote} variant="hero" />
          </Animated.View>

          {/* ─── Refresh ───────────────────────────────────────────────── */}
          <Animated.View entering={FadeInUp.delay(300).duration(500)} style={styles.refreshRow}>
            <TouchableOpacity style={styles.refreshBtn} onPress={handleRefresh} activeOpacity={0.85}>
              <LinearGradient
                colors={['#F4CA9E', '#EDB87E']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.refreshGradient}
              >
                <RefreshCw size={15} color="#6F4B2A" strokeWidth={2} />
                <Text style={styles.refreshLabel}>New quote</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 18,
  },
  dateBlock: {
    gap: 3,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: Fonts.serif,
    letterSpacing: 0.1,
  },
  dateText: {
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.70)',
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.90)',
  },
  streakEmoji: {
    fontSize: 13,
  },
  streakNum: {
    fontSize: 14,
    fontWeight: '700',
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.70)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.90)',
  },
  scroll: {
    paddingBottom: 120,
    flexGrow: 1,
    justifyContent: 'center',
    gap: 18,
  },
  refreshRow: {
    alignItems: 'center',
  },
  refreshBtn: {
    borderRadius: 32,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
  },
  refreshGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    paddingVertical: 13,
    paddingHorizontal: 26,
  },
  refreshLabel: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.2,
    color: '#6F4B2A',
  },
});

