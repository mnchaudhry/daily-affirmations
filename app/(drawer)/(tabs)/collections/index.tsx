import { AppColors, Fonts } from '@/constants/theme';
import CategoryChips from '@/src/components/CategoryChips';
import HomeDecor from '@/src/components/HomeDecor';
import QuoteCard from '@/src/components/QuoteCard';
import { Category, CATEGORY_META, QUOTES } from '@/src/data/quotes';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useMemo, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function ExploreScreen() {
  const [selected, setSelected] = useState<Category | 'all'>('all');

  const filtered = useMemo(
    () => (selected === 'all' ? QUOTES : QUOTES.filter((q) => q.category === selected)),
    [selected],
  );

  const activeMeta = selected !== 'all' ? CATEGORY_META[selected] : null;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient
        colors={['#F8EDD8', '#EDE4CC', '#E8DCC0'] as const}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
      />
      <HomeDecor />
      <SafeAreaView style={styles.safeArea}>
        <Animated.View entering={FadeInDown.duration(400).springify()} style={styles.header}>
          <View>
            <Text style={styles.title}>Explore</Text>
            <Text style={styles.subtitle}>
              {activeMeta
                ? `${activeMeta.emoji}  ${activeMeta.label} · ${filtered.length} quotes`
                : `${filtered.length} quotes across all categories`}
            </Text>
          </View>
        </Animated.View>
        <FlatList
          data={filtered}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<CategoryChips selected={selected} onChange={setSelected} />}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInDown.delay(index * 40).duration(350)}>
              <QuoteCard quote={item} variant="list" />
            </Animated.View>
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  header: {
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: AppColors.textPrimary,
    fontFamily: Fonts.serif,
    letterSpacing: 0.1,
  },
  subtitle: {
    fontSize: 13,
    color: AppColors.textSecondary,
    marginTop: 3,
    fontWeight: '500',
  },
  list: { paddingBottom: 120 },
});
