import { AppColors } from '@/constants/theme';
import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface GratitudeEntryRowProps {
  text: string;
  date: string;
  onPress?: () => void;
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function GratitudeEntryRow({ text, date, onPress }: GratitudeEntryRowProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <TouchableOpacity style={styles.entryRow} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.entryIcon}>
        <Text style={styles.entryIconText}>🌿</Text>
      </View>
      <Text style={styles.entryText} numberOfLines={1}>{text}</Text>
      <Text style={styles.entryDate}>{date}</Text>
      <ChevronRight size={16} color={AppColors.textMuted} strokeWidth={1.5} />
    </TouchableOpacity>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
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
