import { AppColors, Fonts } from '@/constants/theme';
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
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Text style={styles.iconEmoji}>🤲</Text>
      </View>
      <Text style={styles.entryText} numberOfLines={1}>{text}</Text>
      <Text style={styles.entryDate}>{date}</Text>
      <ChevronRight size={15} color={AppColors.textMuted} strokeWidth={1.5} />
    </TouchableOpacity>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: AppColors.surface,
    borderRadius: 16,
    gap: 12,
    shadowColor: '#2C1A0E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F0EAE0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconEmoji: {
    fontSize: 18,
  },
  entryText: {
    flex: 1,
    fontSize: 15,
    fontFamily: Fonts.sans,
    fontWeight: '500',
    color: AppColors.textPrimary,
  },
  entryDate: {
    fontSize: 13,
    color: AppColors.textMuted,
    marginRight: 2,
  },
});
