import { AppColors } from '@/constants/theme';
import { useStreak } from '@/src/hooks/useStreak';
import { Bell, ChevronRight, Info, Moon, Star } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

function SectionHeader({ label }: { label: string }) {
  return <Text style={styles.sectionLabel}>{label}</Text>;
}

export default function ProfileScreen() {
  const streak = useStreak();
  const [reminders, setReminders] = React.useState(true);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.background} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          <View style={styles.streakCard}>
            <Text style={styles.streakEmoji}>🔥</Text>
            <View style={styles.streakBody}>
              <Text style={styles.streakNum}>{streak} day streak</Text>
              <Text style={styles.streakSub}>Keep opening the app daily</Text>
            </View>
          </View>

          <SectionHeader label="Preferences" />
          <View style={styles.menuCard}>
            <View style={[styles.menuItem, styles.menuItemBorder]}>
              <View style={styles.menuIcon}>
                <Bell size={18} color={AppColors.textSecondary} strokeWidth={1.75} />
              </View>
              <Text style={styles.menuLabel}>Daily Reminder</Text>
              <Switch
                value={reminders}
                onValueChange={setReminders}
                trackColor={{ true: AppColors.accent, false: AppColors.border }}
                thumbColor="#fff"
              />
            </View>
            <View style={[styles.menuItem, styles.menuItemBorder]}>
              <View style={styles.menuIcon}>
                <Moon size={18} color={AppColors.textSecondary} strokeWidth={1.75} />
              </View>
              <Text style={styles.menuLabel}>Reminder Time</Text>
              <View style={styles.menuRight}>
                <Text style={styles.menuValue}>8:00 AM</Text>
                <ChevronRight size={16} color={AppColors.textMuted} strokeWidth={1.5} />
              </View>
            </View>
            <View style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Star size={18} color={AppColors.textSecondary} strokeWidth={1.75} />
              </View>
              <Text style={styles.menuLabel}>Favorite Category</Text>
              <View style={styles.menuRight}>
                <Text style={styles.menuValue}>Growth</Text>
                <ChevronRight size={16} color={AppColors.textMuted} strokeWidth={1.5} />
              </View>
            </View>
          </View>

          <SectionHeader label="About" />
          <View style={styles.menuCard}>
            <View style={styles.menuItem}>
              <View style={styles.menuIcon}>
                <Info size={18} color={AppColors.textSecondary} strokeWidth={1.75} />
              </View>
              <Text style={styles.menuLabel}>About this app</Text>
              <ChevronRight size={16} color={AppColors.textMuted} strokeWidth={1.5} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppColors.background },
  safeArea: { flex: 1 },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16 },
  title: { fontSize: 24, fontWeight: '700', color: AppColors.textPrimary },
  scroll: { paddingBottom: 60, paddingTop: 4 },
  streakCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 28,
    backgroundColor: AppColors.surface,
    borderRadius: 20,
    padding: 20,
    gap: 14,
    shadowColor: '#2C1A0E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  streakEmoji: { fontSize: 36 },
  streakBody: { gap: 3 },
  streakNum: { fontSize: 22, fontWeight: '700', color: AppColors.textPrimary },
  streakSub: { fontSize: 13, color: AppColors.textMuted },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: AppColors.textMuted,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    paddingHorizontal: 20,
    marginBottom: 8,
    marginTop: 4,
  },
  menuCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: AppColors.surface,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#2C1A0E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  menuItemBorder: { borderBottomWidth: 1, borderBottomColor: AppColors.border },
  menuIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: AppColors.surfaceAlt,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLabel: { flex: 1, fontSize: 15, color: AppColors.textPrimary, fontWeight: '500' },
  menuRight: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  menuValue: { fontSize: 13, color: AppColors.textMuted },
});
