import { AppColors } from '@/constants/theme';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface WeekDay {
  date: number;
  label: string;
  isToday: boolean;
  hasEntry?: boolean;
}

interface WeekStripProps {
  days: WeekDay[];
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function WeekStrip({ days }: WeekStripProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.weekStrip}
    >
      {days.map((d, i) => (
        <View key={i} style={styles.dayCell}>
          <Text style={[styles.dayLabel, d.isToday && styles.dayLabelActive]}>{d.label}</Text>
          <View style={[styles.datePill, d.isToday && styles.datePillActive]}>
            <Text style={[styles.dateNum, d.isToday && styles.dateNumActive]}>{d.date}</Text>
          </View>
          {d.hasEntry && <View style={styles.entryDot} />}
        </View>
      ))}
    </ScrollView>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  weekStrip: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 6,
  },
  dayCell: {
    alignItems: 'center',
    gap: 4,
    minWidth: 44,
  },
  dayLabel: {
    fontSize: 11,
    color: AppColors.textMuted,
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  dayLabelActive: {
    color: AppColors.brown,
  },
  datePill: {
    width: 36,
    height: 44,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  datePillActive: {
    borderWidth: 1.5,
    borderColor: AppColors.brown,
    backgroundColor: 'rgba(92,61,46,0.05)',
  },
  dateNum: {
    fontSize: 15,
    color: AppColors.textSecondary,
    fontWeight: '400',
  },
  dateNumActive: {
    color: AppColors.brown,
    fontWeight: '700',
  },
  entryDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: AppColors.brown,
    marginTop: 1,
  },
});
