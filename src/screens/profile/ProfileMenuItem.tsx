import { AppColors } from '@/constants/theme';
import { ChevronRight, LucideIcon } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface ProfileMenuItemProps {
  icon: LucideIcon;
  label: string;
  desc: string;
  isLast?: boolean;
  onPress?: () => void;
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function ProfileMenuItem({ icon: Icon, label, desc, isLast, onPress }: ProfileMenuItemProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <TouchableOpacity
      style={[styles.menuItem, isLast && { borderBottomWidth: 0 }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.menuIconWrap}>
        <Icon size={20} color={AppColors.brown} strokeWidth={1.5} />
      </View>
      <View style={styles.menuTextBlock}>
        <Text style={styles.menuLabel}>{label}</Text>
        <Text style={styles.menuDesc}>{desc}</Text>
      </View>
      <ChevronRight size={16} color={AppColors.textMuted} strokeWidth={1.5} />
    </TouchableOpacity>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.border,
    gap: 14,
  },
  menuIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: AppColors.surfaceAlt,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: AppColors.border,
  },
  menuTextBlock: {
    flex: 1,
  },
  menuLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  menuDesc: {
    fontSize: 13,
    color: AppColors.textMuted,
    marginTop: 2,
  },
});
