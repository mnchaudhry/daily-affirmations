import { AppColors, Fonts } from '@/constants/theme';
import { Award, Bell, Calendar, ChevronRight, Moon, Settings } from 'lucide-react-native';
import React from 'react';
import {
    ScrollView, StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MENU_ITEMS = [
  { id: '1', icon: Calendar, label: 'My Journal', desc: 'View all entries' },
  { id: '2', icon: Award, label: 'Streaks & Badges', desc: '7 day streak 🔥' },
  { id: '3', icon: Moon, label: 'Reminders', desc: 'Daily 8:00 AM' },
  { id: '4', icon: Settings, label: 'Settings', desc: 'Preferences' },
];

export default function Profile() {
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
          <View style={styles.profileSection}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>A</Text>
            </View>
            <Text style={styles.name}>Alex</Text>
            <Text style={styles.subtitle}>Member since Jan 2026</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNum}>42</Text>
              <Text style={styles.statLabel}>Entries</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNum}>7</Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNum}>5</Text>
              <Text style={styles.statLabel}>Badges</Text>
            </View>
          </View>

          <View style={styles.menu}>
            {MENU_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.menuItem, i === MENU_ITEMS.length - 1 && { borderBottomWidth: 0 }]}
                  activeOpacity={0.7}
                >
                  <View style={styles.menuIconWrap}>
                    <Icon size={20} color={AppColors.brown} strokeWidth={1.5} />
                  </View>
                  <View style={styles.menuTextBlock}>
                    <Text style={styles.menuLabel}>{item.label}</Text>
                    <Text style={styles.menuDesc}>{item.desc}</Text>
                  </View>
                  <ChevronRight size={16} color={AppColors.textMuted} strokeWidth={1.5} />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

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
  menu: {
    marginHorizontal: 20,
    backgroundColor: AppColors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AppColors.border,
    overflow: 'hidden',
  },
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
    marginTop: 1,
  },
});
