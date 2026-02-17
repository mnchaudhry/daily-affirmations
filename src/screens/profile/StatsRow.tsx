import { AppColors, Fonts } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface Stat {
  num: string | number;
  label: string;
}

interface StatsRowProps {
  stats: Stat[];
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function StatsRow({ stats }: StatsRowProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={styles.statsRow}>
      {stats.map((stat, i) => (
        <React.Fragment key={i}>
          {i > 0 && <View style={styles.statDivider} />}
          <View style={styles.statBox}>
            <Text style={styles.statNum}>{stat.num}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        </React.Fragment>
      ))}
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: AppColors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AppColors.border,
    padding: 20,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statNum: {
    fontSize: 28,
    fontWeight: '700',
    color: AppColors.textPrimary,
    fontFamily: Fonts.serif,
  },
  statLabel: {
    fontSize: 12,
    color: AppColors.textMuted,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    backgroundColor: AppColors.border,
  },
});
