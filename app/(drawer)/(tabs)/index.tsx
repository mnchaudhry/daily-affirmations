import { AppColors, Fonts } from '@/constants/theme';
import { Bell, ChevronRight, Plus } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

export default function Home() {
  const weekDates = getWeekDates();
  const todayStr = formatTodayDate();

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
          <View style={styles.weekStrip}>
            {weekDates.map((d, i) => (
              <View key={i} style={styles.dayCell}>
                <Text style={styles.dayLabel}>{d.label}</Text>
                <View style={[styles.dateCircle, d.isToday && styles.dateCircleActive]}>
                  <Text style={[styles.dateNum, d.isToday && styles.dateNumActive]}>
                    {d.date}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.dateStr}>{todayStr}</Text>

          <Text style={styles.gratitudeHeading}>
            Today, I&#39;m grateful for {TODAY_GRATITUDE}
          </Text>

          <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
            <Plus size={28} color="#fff" strokeWidth={2} />
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Gratitude History</Text>
          {ENTRIES.map((item) => (
            <TouchableOpacity key={item.id} style={styles.entryRow} activeOpacity={0.7}>
              <View style={styles.entryIcon}>
                <Text style={styles.entryIconText}>🌿</Text>
              </View>
              <Text style={styles.entryText} numberOfLines={1}>{item.text}</Text>
              <Text style={styles.entryDate}>{item.date}</Text>
              <ChevronRight size={16} color={AppColors.textMuted} strokeWidth={1.5} />
            </TouchableOpacity>
          ))}
          <View style={{ height: 20 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

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
  weekStrip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: AppColors.surface,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.border,
  },
  dayCell: {
    alignItems: 'center',
    gap: 6,
  },
  dayLabel: {
    fontSize: 11,
    color: AppColors.textMuted,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  dateCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateCircleActive: {
    borderWidth: 1.5,
    borderColor: AppColors.brown,
  },
  dateNum: {
    fontSize: 14,
    color: AppColors.textSecondary,
  },
  dateNumActive: {
    color: AppColors.brown,
    fontWeight: '700',
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
  entryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: AppColors.surface,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.border,
    gap: 12,
  },
  entryIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: AppColors.surfaceAlt,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  entryIconText: {
    fontSize: 16,
  },
  entryText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: AppColors.textPrimary,
  },
  entryDate: {
    fontSize: 13,
    color: AppColors.textMuted,
    marginRight: 4,
  },
});
