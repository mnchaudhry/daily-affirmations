import { AppColors, Fonts } from '@/constants/theme';
import { Edit3 } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface PillPromptInputProps {
  label: string;
  value: string;
  onPress?: () => void;
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function PillPromptInput({ label, value, onPress }: PillPromptInputProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={styles.promptBlock}>
      <Text style={styles.promptLabel}>{label}</Text>
      <TouchableOpacity style={styles.pillInput} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.pillText}>{value}</Text>
        <Edit3 size={16} color={AppColors.textMuted} strokeWidth={1.5} />
      </TouchableOpacity>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  promptBlock: {
    width: '100%',
    paddingHorizontal: 32,
    marginBottom: 24,
    alignItems: 'center',
  },
  promptLabel: {
    fontSize: 14,
    color: AppColors.textMuted,
    marginBottom: 10,
    letterSpacing: 0.2,
  },
  pillInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: AppColors.surface,
    borderWidth: 2,
    borderColor: AppColors.textPrimary,
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: '100%',
  },
  pillText: {
    fontSize: 18,
    fontWeight: '700',
    color: AppColors.textPrimary,
    fontFamily: Fonts.serif,
  },
});
