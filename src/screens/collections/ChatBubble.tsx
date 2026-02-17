import { AppColors } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface ChatBubbleProps {
  role: 'ai' | 'user';
  text: string;
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function ChatBubble({ role, text }: ChatBubbleProps) {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <View style={[styles.bubble, role === 'user' ? styles.userBubble : styles.aiBubble]}>
      <Text style={[styles.bubbleText, role === 'user' && styles.userBubbleText]}>{text}</Text>
    </View>
  );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '80%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  aiBubble: {
    backgroundColor: AppColors.surface,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: AppColors.border,
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: AppColors.brown,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  bubbleText: {
    fontSize: 15,
    lineHeight: 22,
    color: AppColors.textPrimary,
  },
  userBubbleText: {
    color: '#fff',
  },
});
