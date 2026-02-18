import { AppColors } from '@/constants/theme';
import CategoryChips from '@/src/components/CategoryChips';
import QuoteCard from '@/src/components/QuoteCard';
import { Category, QUOTES } from '@/src/data/quotes';
import React, { useMemo, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function ExploreScreen() {
  const [selected, setSelected] = useState<Category | 'all'>('all');

  const filtered = useMemo(
    () => (selected === 'all' ? QUOTES : QUOTES.filter((q) => q.category === selected)),
    [selected],
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.background} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.title}>Explore</Text>
          <Text style={styles.subtitle}>{filtered.length} quotes</Text>
        </View>
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<CategoryChips selected={selected} onChange={setSelected} />}
          renderItem={({ item }) => <QuoteCard quote={item} variant="list" />}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
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
    alignItems: 'baseline',
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: { fontSize: 24, fontWeight: '700', color: AppColors.textPrimary },
  subtitle: { fontSize: 14, color: AppColors.textMuted },
  list: { paddingBottom: 40 },
});
