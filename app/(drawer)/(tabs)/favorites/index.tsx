import { AppColors } from '@/constants/theme';
import QuoteCard from '@/src/components/QuoteCard';
import { useSaved } from '@/src/store/savedStore';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

function EmptyState() {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyIcon}>♡</Text>
      <Text style={styles.emptyTitle}>Nothing saved yet</Text>
      <Text style={styles.emptyBody}>Tap the heart on any quote to save it here.</Text>
    </View>
  );
}

export default function SavedScreen() {
  const { saved } = useSaved();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.background} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Saved</Text>
          {saved.length > 0 && (
            <Text style={styles.count}>{saved.length}</Text>
          )}
        </View>
        <FlatList
          data={saved}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <QuoteCard quote={item} variant="list" />}
          contentContainerStyle={[styles.list, saved.length === 0 && styles.listEmpty]}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyState />}
        />
      </SafeAreaView>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppColors.background },
  safeArea: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  title: { fontSize: 24, fontWeight: '700', color: AppColors.textPrimary },
  count: {
    fontSize: 14,
    fontWeight: '600',
    color: AppColors.textMuted,
    backgroundColor: AppColors.surface,
    borderRadius: 12,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: AppColors.border,
    overflow: 'hidden',
  },
  list: { paddingBottom: 40 },
  listEmpty: { flex: 1 },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 40,
  },
  emptyIcon: { fontSize: 48, marginBottom: 4, color: AppColors.textMuted },
  emptyTitle: { fontSize: 18, fontWeight: '600', color: AppColors.textPrimary, textAlign: 'center' },
  emptyBody: { fontSize: 14, color: AppColors.textMuted, textAlign: 'center', lineHeight: 22 },
});
