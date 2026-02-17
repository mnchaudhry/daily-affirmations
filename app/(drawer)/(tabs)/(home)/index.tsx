import GratitudeEntryRow from '@/src/screens/home/GratitudeEntryRow';
import { AppColors, Fonts } from '@/constants/theme';
import { Bell, Plus } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WeekStrip from '@/src/screens/home/WeekStrip';

//////////////////////////////////////////// VARIABLES ////////////////////////////////////////////

interface GratitudeEntry {
  id: string;
  text: string;
  date: string;
}

const ENTRIES: GratitudeEntry[] = [
  { id: '1', text: "I'm grateful for the sunset", date: 'Jan 22' },
  { id: '2', text: "I'm grateful for my family", date: 'Jan 21' },
  { id: '3', text: "I'm grateful for the wind", date: 'Jan 25' },
  { id: '4', text: "I'm grateful for good health", date: 'Jan 18' },
  { id: '5', text: "I'm grateful for this moment", date: 'Jan 17' },
];

const TODAY_GRATITUDE = 'the sunshine.';

//////////////////////////////////////////// FUNCTIONS ////////////////////////////////////////////

function getWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return {
      date: d.getDate(),
      label: ['M', 'T', 'W', 'T', 'F', 'S', 'S'][i],
      isToday: d.toDateString() === today.toDateString(),
    };
  });
}

function formatTodayDate() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function Home() {
  ////////////////////////////////////////// VARIABLES //////////////////////////////////////////
  const weekDates = getWeekDates();
  const todayStr = formatTodayDate();

  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.background} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <Text style={styles.headerTitle}>Gratefulness</Text>
          <TouchableOpacity style={styles.bellBtn}>
            <Bell size={20} color={AppColors.textSecondary} strokeWidth={1.5} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <WeekStrip days={weekDates} />

          <Text style={styles.dateStr}>{todayStr}</Text>

          <Text style={styles.gratitudeHeading}>
            Today, I&#39;m grateful for {TODAY_GRATITUDE}
          </Text>

          <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
            <Plus size={28} color="#fff" strokeWidth={2} />
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Gratitude History</Text>
          {ENTRIES.map((item) => (
            <GratitudeEntryRow key={item.id} text={item.text} date={item.date} />
          ))}
          <View style={{ height: 20 }} />
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
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: AppColors.brown,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: AppColors.textPrimary,
    letterSpacing: 0.3,
  },
  bellBtn: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dateStr: {
    fontSize: 13,
    color: AppColors.textMuted,
    textAlign: 'center',
    marginTop: 20,
    letterSpacing: 0.3,
  },
  gratitudeHeading: {
    fontSize: 34,
    lineHeight: 46,
    fontFamily: Fonts.serif,
    color: AppColors.textPrimary,
    paddingHorizontal: 24,
    marginTop: 10,
    fontWeight: '400',
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: AppColors.brown,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 32,
    shadowColor: AppColors.brown,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.textPrimary,
    paddingHorizontal: 20,
    marginBottom: 4,
    marginTop: 4,
  },
});
