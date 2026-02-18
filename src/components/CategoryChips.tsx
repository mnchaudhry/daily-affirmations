import { AppColors } from '@/constants/theme';
import { Category, CATEGORY_META, QUOTES } from '@/src/data/quotes';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface CategoryChipsProps {
  selected: Category | 'all';
  onChange: (cat: Category | 'all') => void;
}

const ALL_CATS: (Category | 'all')[] = ['all', 'growth', 'peace', 'love', 'strength', 'courage'];

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function CategoryChips({ selected, onChange }: CategoryChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {ALL_CATS.map((cat) => {
        const isActive = selected === cat;
        const meta = cat !== 'all' ? CATEGORY_META[cat] : null;
        const count = cat === 'all' ? QUOTES.length : QUOTES.filter(q => q.category === cat).length;
        return (
          <TouchableOpacity
            key={cat}
            style={[
              styles.chip,
              isActive
                ? { backgroundColor: meta?.color ?? AppColors.textPrimary, borderColor: 'transparent', shadowColor: meta?.color ?? AppColors.textPrimary, shadowOpacity: 0.35, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 4 }
                : { backgroundColor: AppColors.surface, borderColor: AppColors.border },
            ]}
            onPress={() => onChange(cat)}
            activeOpacity={0.75}
          >
            {meta && <Text style={styles.chipEmoji}>{meta.emoji}</Text>}
            <Text style={[styles.chipLabel, isActive ? styles.chipLabelActive : { color: AppColors.textSecondary }]}>
              {cat === 'all' ? 'All' : meta!.label}
            </Text>
            <Text style={[styles.chipCount, isActive ? styles.chipCountActive : { color: AppColors.textMuted, backgroundColor: AppColors.surfaceAlt }]}>
              {count}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 9,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 22,
    borderWidth: 1,
  },
  chipEmoji: {
    fontSize: 13,
  },
  chipLabel: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  chipLabelActive: {
    color: '#fff',
  },
  chipCount: {
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  chipCountActive: {
    color: 'rgba(255,255,255,0.85)',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});
