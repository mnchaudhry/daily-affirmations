import { AppColors, Fonts } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Share2, ThumbsUp } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

interface QuoteCardProps {
  text: string;
  author?: string;
  index?: number;
  likes?: number;
  loves?: number;
  shares?: number;
}

export default function GlassCard({
  text,
  author,
  index = 0,
  likes = 99,
  loves = 125,
  shares = 7,
}: QuoteCardProps) {
  const [loved, setLoved] = React.useState(false);

  return (
    <Animated.View entering={FadeIn.delay(index * 80)} style={styles.container}>
      <LinearGradient
        colors={['#1A2B1A', '#2D3E2D', '#1A2320']}
        style={StyleSheet.absoluteFill}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={styles.overlay} />

      <View style={styles.counterContainer}>
        <Text style={styles.counter}>99</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.quoteText}>"{text}"</Text>
        {author ? <Text style={styles.author}>{author}</Text> : null}
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Heart size={15} color="rgba(255,255,255,0.65)" />
          <Text style={styles.statText}>{loves} love</Text>
        </View>
        <View style={styles.stat}>
          <ThumbsUp size={15} color="rgba(255,255,255,0.65)" />
          <Text style={styles.statText}>{likes} likes</Text>
        </View>
        <View style={styles.stat}>
          <Share2 size={15} color="rgba(255,255,255,0.65)" />
          <Text style={styles.statText}>{shares} share</Text>
        </View>
      </View>

      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionBtn}>
          <Share2 size={24} color={AppColors.textSecondary} strokeWidth={1.5} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loveFab} onPress={() => setLoved(!loved)}>
          <Heart size={28} color="#fff" fill={loved ? '#fff' : 'transparent'} strokeWidth={1.75} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <ThumbsUp size={24} color={AppColors.textSecondary} strokeWidth={1.5} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A2B1A',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  counterContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  counter: {
    fontSize: 72,
    fontWeight: '200',
    color: 'rgba(255,255,255,0.9)',
    fontFamily: Fonts.serif,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  quoteText: {
    fontSize: 28,
    lineHeight: 44,
    color: '#FFFFFF',
    fontFamily: Fonts.serif,
    textAlign: 'center',
    fontWeight: '400',
  },
  author: {
    marginTop: 24,
    fontSize: 16,
    color: 'rgba(255,255,255,0.65)',
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: Fonts.serif,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 14,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingVertical: 24,
    paddingHorizontal: 40,
    paddingBottom: 44,
  },
  actionBtn: {
    padding: 10,
  },
  loveFab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: AppColors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: AppColors.accent,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    transform: [{ translateY: -24 }],
  },
});

