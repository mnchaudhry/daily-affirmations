import { AppColors } from '@/constants/theme';
import { Bell, Send } from 'lucide-react-native';
import React from 'react';
import {
    ScrollView, StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CHAT_MESSAGES = [
  { id: '1', role: 'ai', text: "Hello! I'm Freud AI, your mental wellness companion. How are you feeling today?" },
  { id: '2', role: 'user', text: "I've been feeling a bit anxious lately." },
  { id: '3', role: 'ai', text: "I understand. Anxiety can be challenging. Let's explore what might be triggering these feelings. What situations bring on the anxiety?" },
];

export default function FreudAI() {
  const [message, setMessage] = React.useState('');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={AppColors.background} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.avatarEmoji}>🧠</Text>
          <Text style={styles.headerTitle}>Freud AI</Text>
          <TouchableOpacity>
            <Bell size={20} color={AppColors.textSecondary} strokeWidth={1.5} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Your mindful companion</Text>
        <ScrollView style={styles.chatArea} contentContainerStyle={styles.chatContent} showsVerticalScrollIndicator={false}>
          {CHAT_MESSAGES.map((msg) => (
            <View key={msg.id} style={[styles.bubble, msg.role === 'user' ? styles.userBubble : styles.aiBubble]}>
              <Text style={[styles.bubbleText, msg.role === 'user' && styles.userBubbleText]}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your thoughts..."
            placeholderTextColor={AppColors.textMuted}
            multiline
          />
          <TouchableOpacity style={styles.sendBtn}>
            <Send size={18} color="#fff" strokeWidth={1.75} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  safeArea: {
    flex: 1,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  avatarEmoji: {
    fontSize: 28,
    width: 38,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: AppColors.textPrimary,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 13,
    color: AppColors.textMuted,
    marginBottom: 16,
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: 16,
  },
  chatContent: {
    gap: 12,
    paddingBottom: 20,
  },
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
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    gap: 12,
    marginTop: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: AppColors.surface,
    borderWidth: 1.5,
    borderColor: AppColors.border,
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 15,
    color: AppColors.textPrimary,
    maxHeight: 100,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: AppColors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
