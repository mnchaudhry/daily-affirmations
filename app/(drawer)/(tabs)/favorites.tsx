import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import BackgroundContainer from '@/components/BackgroundContainer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trash2 } from 'lucide-react-native';

const FAVORITES = [
    { id: '1', text: "I am deserving of all the good things in life.", savedAt: 'Oct 23' },
    { id: '2', text: "Peace begins with me.", savedAt: 'Nov 1' },
];

export default function Favorites() {
  const renderItem = ({ item }) => (
    <View style={styles.cardWrapper}>
        <BlurView intensity={60} tint="light" style={styles.card}>
            <Text style={styles.quoteText}>&quot;{item.text}&quot;</Text>
            <View style={styles.cardFooter}>
                <Text style={styles.dateText}>Saved on {item.savedAt}</Text>
                <TouchableOpacity style={styles.deleteButton}>
                    <Trash2 color="#c0392b" size={18} />
                </TouchableOpacity>
            </View>
        </BlurView>
    </View>
  );

  return (
    <BackgroundContainer mood="love">
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Your Hearts</Text>
        <FlatList
          data={FAVORITES}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
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
    fontWeight: '300',
    color: '#fff',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  cardWrapper: {
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  card: {
    padding: 25,
  },
  quoteText: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 28,
    color: '#2d3436',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    paddingTop: 10,
  },
  dateText: {
    fontSize: 12,
    color: '#636e72',
  },
  deleteButton: {
    padding: 5,
  }
});
