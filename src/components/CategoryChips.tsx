import { AppColors } from '@/constants/theme';
import { Category, CATEGORY_META } from '@/src/data/quotes';
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
        return (
          <TouchableOpacity
            key={cat}
            style={[
              styles.chip,
              isActive && { backgroundColor: meta?.color ?? AppColors.textPrimary },
            ]}
            onPress={() => onChange(cat)}
            activeOpacity={0.75}
          >
            {meta && <Text style={styles.chipEmoji}>{meta.emoji}</Text>}
            <Text style={[styles.chipLabel, isActive && styles.chipLabelActive]}>
              {cat === 'all' ? 'All' : meta!.label}
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
    paddingVertical: 12,
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: AppColors.surface,
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  chipEmoji: {
    fontSize: 13,
  },
  chipLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: AppColors.textSecondary,
  },
  chipLabelActive: {
    color: '#fff',
  },
});
