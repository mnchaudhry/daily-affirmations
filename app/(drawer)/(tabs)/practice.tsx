import { AppColors, Fonts } from '@/constants/theme';
import { Bell, ChevronLeft, Edit3, Plus } from 'lucide-react-native';
import React, { useState } from 'react';
import {
    ScrollView, StatusBar,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PROMPTS = [
  { id: '1', label: "Today, I'm grateful for", value: 'Sunshine' },
  { id: '2', label: 'Small thing I appreciate', value: 'Morning Coffee' },
  { id: '3', label: "I'm thankful for", value: 'My Best Friend' },
];

export default function LogGratitude() {
  const [prompts] = useState(PROMPTS);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.background} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <ChevronLeft size={24} color={AppColors.textSecondary} strokeWidth={1.5} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Log Gratitude</Text>
          <TouchableOpacity>
            <Bell size={20} color={AppColors.textSecondary} strokeWidth={1.5} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.illustrationContainer}>
            <Text style={styles.jarEmoji}>🫙</Text>
            <View style={styles.heartsRow}>
              <Text style={styles.heartEmoji}>❤️</Text>
              <Text style={styles.heartEmoji}>❤️</Text>
              <Text style={styles.heartEmoji}>❤️</Text>
            </View>
          </View>

          {prompts.map((prompt) => (
            <View key={prompt.id} style={styles.promptBlock}>
              <Text style={styles.promptLabel}>{prompt.label}</Text>
              <TouchableOpacity style={styles.pillInput} activeOpacity={0.7}>
                <Text style={styles.pillText}>{prompt.value}</Text>
                <Edit3 size={16} color={AppColors.textMuted} strokeWidth={1.5} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
          <Plus size={28} color="#fff" strokeWidth={2} />
        </TouchableOpacity>
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
    paddingBottom: 120,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  backBtn: {
    width: 38,
    height: 38,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  illustrationContainer: {
    marginTop: 20,
    marginBottom: 32,
    alignItems: 'center',
  },
  jarEmoji: {
    fontSize: 80,
  },
  heartsRow: {
    flexDirection: 'row',
    gap: 4,
    marginTop: -24,
    marginLeft: 8,
  },
  heartEmoji: {
    fontSize: 18,
  },
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
  fab: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: AppColors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: AppColors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
});
