import React from 'react';
import { StyleSheet, View, FlatList, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useNavigation } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { Share, Heart, Menu } from 'lucide-react-native';
import { DrawerActions } from '@react-navigation/native';

import GlassCard from '@/components/GlassCard';
import BackgroundContainer from '@/components/BackgroundContainer';
import { Moods } from '@/constants/theme';

const { width, height } = Dimensions.get('window');

interface Affirmation {
  id: string;
  text: string;
  category: string;
}

const DATA: Affirmation[] = [
  { id: '1', text: "I possess the qualities needed to be extremely successful.", category: 'Wealth' },
  { id: '2', text: "My ability to conquer my challenges is limitless; my potential to succeed is infinite.", category: 'Strength' },
  { id: '3', text: "I am superior to negative thoughts and low actions.", category: 'Mindset' },
  { id: '4', text: "I forgive myself for not being perfect.", category: 'Self-Love' },
  { id: '5', text: "Every day, in every way, I am getting better and better.", category: 'Growth' },
];

export default function Page() {
  const [activeMood] = React.useState<keyof typeof Moods>('morning');
  const navigation = useNavigation();

  const renderItem = ({ item, index }: { item: Affirmation, index: number }) => (
    <View style={styles.pageContainer}>
      <GlassCard 
        text={item.text} 
        category={item.category} 
        index={index} 
      />
    </View>
  );

  const onMomentumScrollEnd = () => {
    Haptics.selectionAsync();
  };

  return (
    <BackgroundContainer mood={activeMood}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="light-content" />
      
      <SafeAreaView style={styles.container}>
        {/* Header Actions */}
        <View style={styles.header}>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Menu color="#fff" size={24} opacity={0.8} />
            </TouchableOpacity>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          snapToAlignment="center"
          decelerationRate="fast"
          onMomentumScrollEnd={onMomentumScrollEnd}
          contentContainerStyle={styles.listContent}
        />

        {/* Floating Action Bar */}
        <View style={styles.fabContainer}>
            <TouchableOpacity style={styles.fabButton} onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}>
                <Heart color="#fff" size={28} />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.fabButton, styles.primaryFab]} onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)}>
                <Share color="#000" size={28} />
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
  },
  iconButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  listContent: {
  },
  pageContainer: {
    width: width,
    height: height, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabContainer: {
    position: 'absolute',
    bottom: 110,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  fabButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  primaryFab: {
    backgroundColor: '#fff',
    transform: [{ scale: 1.1 }],
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  }
});
