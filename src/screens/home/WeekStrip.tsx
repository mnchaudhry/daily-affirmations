import { AppColors } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface WeekDay {
  date: number;
  label: string;
  isToday: boolean;
}

interface WeekStripProps {
  days: WeekDay[];
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function WeekStrip({ days }: WeekStripProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={styles.weekStrip}>
      {days.map((d, i) => (
        <View key={i} style={styles.dayCell}>
          <Text style={styles.dayLabel}>{d.label}</Text>
          <View style={[styles.dateCircle, d.isToday && styles.dateCircleActive]}>
            <Text style={[styles.dateNum, d.isToday && styles.dateNumActive]}>{d.date}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
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
});
