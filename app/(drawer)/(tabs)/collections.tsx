import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundContainer from '@/components/BackgroundContainer';
import { ArrowRight } from 'lucide-react-native';

const CATEGORIES = [
  { id: '1', title: 'Wealth & Success', count: 42, color: ['#F2994A', '#F2C94C'] },
  { id: '2', title: 'Self-Love', count: 28, color: ['#FF9A9E', '#FECFEF'] },
  { id: '3', title: 'Anxiety Relief', count: 35, color: ['#a18cd1', '#fbc2eb'] },
  { id: '4', title: 'Health & Vitality', count: 19, color: ['#84fab0', '#8fd3f4'] },
  { id: '5', title: 'Deep Sleep', count: 14, color: ['#29323c', '#485563'] },
];

export default function Collections() {
  const renderItem = ({ item }: { item: typeof CATEGORIES[0] }) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.cardWrapper}>
        <BlurView intensity={40} tint="light" style={styles.card}>
            <View style={styles.cardContent}>
                <View>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardSubtitle}>{item.count} Affirmations</Text>
                </View>
                <View style={styles.iconContainer}>
                    <ArrowRight color="#333" size={20} />
                </View>
            </View>
        </BlurView>
    </TouchableOpacity>
  );

  return (
    <BackgroundContainer mood="focus">
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Collections</Text>
        <FlatList
          data={CATEGORIES}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '300', // Thin/Elegant
    color: '#fff',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'System', 
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Space for TabBar
  },
  cardWrapper: {
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  card: {
    padding: 25,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#444', 
    opacity: 0.8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
