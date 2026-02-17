import { AppColors, Fonts } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface ProfileHeaderProps {
  initials: string;
  name: string;
  memberSince: string;
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function ProfileHeader({ initials, name, memberSince }: ProfileHeaderProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={styles.profileSection}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{memberSince}</Text>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    paddingVertical: 28,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: AppColors.brown,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: '#fff',
    fontSize: 34,
    fontFamily: Fonts.serif,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: AppColors.textPrimary,
    fontFamily: Fonts.serif,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: AppColors.textMuted,
  },
});
