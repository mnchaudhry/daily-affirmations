import { AppColors } from '@/constants/theme';
import QuoteCard from '@/src/components/QuoteCard';
import { getQuoteOfTheDay, QUOTES } from '@/src/data/quotes';
import { useStreak } from '@/src/hooks/useStreak';
import { Bell, RefreshCw } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

  const handleRefresh = () => {
    setQuote((prev) => getRandomQuote(prev.id));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.background} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.dateBlock}>
            <Text style={styles.appName}>Daily Affirmations</Text>
            <Text style={styles.dateText}>{formatDate()}</Text>
          </View>
          <View style={styles.headerRight}>
            {streak > 0 && (
              <View style={styles.streakBadge}>
                <Text style={styles.streakText}>🔥 {streak}</Text>
              </View>
            )}
            <TouchableOpacity style={styles.iconBtn}>
              <Bell size={20} color={AppColors.textSecondary} strokeWidth={1.5} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          bounces={false}
        >
          <QuoteCard quote={quote} variant="hero" />

          <TouchableOpacity style={styles.refreshBtn} onPress={handleRefresh} activeOpacity={0.8}>
            <RefreshCw size={16} color={AppColors.textSecondary} strokeWidth={1.75} />
            <Text style={styles.refreshLabel}>New quote</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
  },
  dateBlock: {
    gap: 2,
  },
  appName: {
    fontSize: 20,
    fontWeight: '700',
    color: AppColors.textPrimary,
    letterSpacing: 0.2,
  },
  dateText: {
    fontSize: 13,
    color: AppColors.textMuted,
    fontWeight: '400',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  streakBadge: {
    backgroundColor: AppColors.surface,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  streakText: {
    fontSize: 13,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  iconBtn: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    paddingBottom: 40,
    justifyContent: 'center',
    flexGrow: 1,
    gap: 20,
  },
  refreshBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 14,
    backgroundColor: AppColors.surface,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  refreshLabel: {
    fontSize: 14,
    color: AppColors.textSecondary,
    fontWeight: '500',
  },
});


