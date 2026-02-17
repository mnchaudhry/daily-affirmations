import { AppColors } from '@/constants/theme';
import GratitudeJarIllustration from '@/src/screens/practice/GratitudeJarIllustration';
import PillPromptInput from '@/src/screens/practice/PillPromptInput';
import { Bell, ChevronLeft, Plus } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//////////////////////////////////////////// VARIABLES ////////////////////////////////////////////

const INITIAL_PROMPTS = [
  { id: '1', label: "Today, I'm grateful for", value: 'Sunshine' },
  { id: '2', label: 'Small thing I appreciate', value: 'Morning Coffee' },
  { id: '3', label: "I'm thankful for", value: 'My Best Friend' },
];

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function LogGratitude() {
  ////////////////////////////////////////// STATE //////////////////////////////////////////
  const [prompts] = useState(INITIAL_PROMPTS);

  ////////////////////////////////////////// RENDER //////////////////////////////////////////
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
          <GratitudeJarIllustration />

          {prompts.map((prompt) => (
            <PillPromptInput
              key={prompt.id}
              label={prompt.label}
              value={prompt.value}
            />
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.fab} activeOpacity={0.8}>
          <Plus size={28} color="#fff" strokeWidth={2} />
        </TouchableOpacity>
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
