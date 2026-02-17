import { AppColors } from '@/constants/theme';
import { Award, Bell, Calendar, Moon, Settings } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHeader from '@/src/screens/profile/ProfileHeader';
import StatsRow from '@/src/screens/profile/StatsRow';
import ProfileMenuItem from '@/src/screens/profile/ProfileMenuItem';

//////////////////////////////////////////// VARIABLES ////////////////////////////////////////////

const MENU_ITEMS = [
  { id: '1', icon: Calendar, label: 'My Journal', desc: 'View all entries' },
  { id: '2', icon: Award, label: 'Streaks & Badges', desc: '7 day streak 🔥' },
  { id: '3', icon: Moon, label: 'Reminders', desc: 'Daily 8:00 AM' },
  { id: '4', icon: Settings, label: 'Settings', desc: 'Preferences' },
];

const PROFILE_STATS = [
  { num: 42, label: 'Entries' },
  { num: 7, label: 'Day Streak' },
  { num: 5, label: 'Badges' },
];


export default function Profile() {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.background} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={{ width: 38 }} />
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <Bell size={20} color={AppColors.textSecondary} strokeWidth={1.5} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <ProfileHeader initials="A" name="Alex" memberSince="Member since Jan 2026" />

          <StatsRow stats={PROFILE_STATS} />

          <View style={styles.menu}>
            {MENU_ITEMS.map((item, i) => (
              <ProfileMenuItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                desc={item.desc}
                isLast={i === MENU_ITEMS.length - 1}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  menu: {
    marginHorizontal: 20,
    backgroundColor: AppColors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AppColors.border,
    overflow: 'hidden',
  },
});
