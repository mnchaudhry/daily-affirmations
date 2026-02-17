import { AppColors, Fonts } from '@/constants/theme';
import ResourceCard from '@/src/screens/favorites/ResourceCard';
import { Bell } from 'lucide-react-native';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//////////////////////////////////////////// VARIABLES ////////////////////////////////////////////

const RESOURCES = [
  { id: '1', emoji: '📖', title: 'Guided Meditations', count: 24, desc: 'Find your calm' },
  { id: '2', emoji: '💆', title: 'Breathing Exercises', count: 12, desc: '5-min sessions' },
  { id: '3', emoji: '✨', title: 'Affirmations Library', count: 200, desc: 'Daily power words' },
  { id: '4', emoji: '🌙', title: 'Sleep Stories', count: 18, desc: 'Wind down gently' },
  { id: '5', emoji: '📝', title: 'Journal Prompts', count: 50, desc: 'Spark reflection' },
  { id: '6', emoji: '🎵', title: 'Sound Therapy', count: 30, desc: 'Healing frequencies' },
];

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function Resources() {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.background} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={{ width: 38 }} />
          <Text style={styles.headerTitle}>Resources</Text>
          <TouchableOpacity style={styles.bellBtn}>
            <Bell size={20} color={AppColors.textSecondary} strokeWidth={1.5} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>What would you like to explore?</Text>
        <FlatList
          data={RESOURCES}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ResourceCard
              emoji={item.emoji}
              title={item.title}
              desc={item.desc}
              count={item.count}
            />
          )}
        />
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
  bellBtn: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: Fonts.serif,
    color: AppColors.textSecondary,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    gap: 12,
  },
});
