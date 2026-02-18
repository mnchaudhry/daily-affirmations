import { AppColors, Fonts } from '@/constants/theme';
import { CATEGORY_META, Quote } from '@/src/data/quotes';
import { useSaved } from '@/src/store/savedStore';
import * as Haptics from 'expo-haptics';
import { Heart, Share2 } from 'lucide-react-native';
import React from 'react';
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring } from 'react-native-reanimated';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface QuoteCardProps {
    quote: Quote;
    /** Show full-size hero layout (Today screen) vs compact list card */
    variant?: 'hero' | 'list';
}

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function QuoteCard({ quote, variant = 'hero' }: QuoteCardProps) {
    const { isSaved, toggleSave } = useSaved();
    const saved = isSaved(quote.id);
    const meta = CATEGORY_META[quote.category];
    const heartScale = useSharedValue(1);

    const animatedHeart = useAnimatedStyle(() => ({
        transform: [{ scale: heartScale.value }],
    }));

    const handleSave = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        heartScale.value = withSequence(
            withSpring(1.35, { damping: 4, stiffness: 300 }),
            withSpring(1,    { damping: 6, stiffness: 200 }),
        );
        toggleSave(quote);
    };

    const handleShare = async () => {
        try {
            await Share.share({
                message: `"${quote.text}"\n— ${quote.author}\n\nDaily Affirmations`,
            });
        } catch (e) {
            console.log('e', e)
        }
    };

    if (variant === 'list') {
        return (
            <View style={styles.listCard}>
                <View style={[styles.categoryDot, { backgroundColor: meta.bg }]}>
                    <Text style={styles.categoryDotEmoji}>{meta.emoji}</Text>
                </View>
                <View style={styles.listCardBody}>
                    <Text style={styles.listCardText} numberOfLines={2}>{quote.text}</Text>
                    <Text style={styles.listCardAuthor}>— {quote.author}</Text>
                </View>
                <TouchableOpacity onPress={handleSave} style={styles.listHeart} hitSlop={12}>
                    <Heart
                        size={18}
                        color={saved ? AppColors.accentWarm : AppColors.textMuted}
                        fill={saved ? AppColors.accentWarm : 'transparent'}
                        strokeWidth={1.75}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.heroCard}>
            {/* Top row: category pill + decorative quote mark */}
            <View style={styles.heroTop}>
                <View style={[styles.categoryPill, { backgroundColor: meta.bg }]}>
                    <Text style={[styles.categoryPillText, { color: meta.color }]}>
                        {meta.emoji}  {meta.label}
                    </Text>
                </View>
                <Text style={[styles.decorativeQuote, { color: meta.bg }]}>❝</Text>
            </View>

            {/* Quote text */}
            <Text style={styles.heroText}>{quote.text}</Text>

            {/* Author */}
            <View style={styles.authorRow}>
                <View style={[styles.authorLine, { backgroundColor: meta.color + '40' }]} />
                <Text style={styles.heroAuthor}>{quote.author}</Text>
                <View style={[styles.authorLine, { backgroundColor: meta.color + '40' }]} />
            </View>

            {/* Actions */}
            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionBtn} onPress={handleSave} activeOpacity={0.75}>
                    <Animated.View style={[styles.actionIconWrap, saved && styles.actionIconWrapSaved, animatedHeart]}>
                        <Heart
                            size={18}
                            color={saved ? '#fff' : AppColors.textSecondary}
                            fill={saved ? '#fff' : 'transparent'}
                            strokeWidth={2}
                        />
                    </Animated.View>
                    <Text style={[styles.actionLabel, saved && { color: AppColors.accentWarm }]}>
                        {saved ? 'Saved' : 'Save'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBtn} onPress={handleShare} activeOpacity={0.75}>
                    <View style={styles.actionIconWrap}>
                        <Share2 size={18} color={AppColors.textSecondary} strokeWidth={2} />
                    </View>
                    <Text style={styles.actionLabel}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

//////////////////////////////////////////// STYLES ////////////////////////////////////////////

const styles = StyleSheet.create({
    // ─── Hero ────────────────────────────────────────────────────────────────────
    heroCard: {
        backgroundColor: '#FDFAF4',  // warm parchment, not stark white
        borderRadius: 32,
        marginHorizontal: 20,
        paddingHorizontal: 28,
        paddingTop: 24,
        paddingBottom: 28,
        shadowColor: '#7A4E28',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.18,
        shadowRadius: 32,
        elevation: 8,
        borderWidth: 1,
        borderColor: 'rgba(210,190,160,0.5)',
    },
    heroTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    categoryPill: {
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 6,
    },
    categoryPillText: {
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    decorativeQuote: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: Fonts.serif,
        opacity: 0.22,
        marginTop: -10,
    },
    heroText: {
        fontFamily: Fonts.serif,
        fontSize: 23,
        lineHeight: 38,
        color: AppColors.textPrimary,
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: 24,
        letterSpacing: 0.1,
    },
    authorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 28,
        paddingHorizontal: 4,
    },
    authorLine: {
        flex: 1,
        height: 1,
        borderRadius: 1,
    },
    heroAuthor: {
        fontSize: 13,
        color: AppColors.textSecondary,
        fontStyle: 'italic',
        fontFamily: Fonts.serif,
        flexShrink: 1,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    actionBtn: {
        alignItems: 'center',
        gap: 6,
        flex: 1,
    },
    actionIconWrap: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: AppColors.surfaceAlt,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: AppColors.border,
    },
    actionIconWrapSaved: {
        backgroundColor: AppColors.accentWarm,
        borderColor: AppColors.accentWarm,
    },
    actionLabel: {
        fontSize: 12,
        color: AppColors.textSecondary,
        fontWeight: '600',
        letterSpacing: 0.2,
    },

    // ─── List ────────────────────────────────────────────────────────────────────
    listCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FDFAF4',
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 18,
        padding: 14,
        gap: 12,
        shadowColor: '#1E1209',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    categoryDot: {
        width: 42,
        height: 42,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },
    categoryDotEmoji: {
        fontSize: 18,
    },
    listCardBody: {
        flex: 1,
        gap: 4,
    },
    listCardText: {
        fontSize: 14,
        color: AppColors.textPrimary,
        fontWeight: '500',
        lineHeight: 21,
    },
    listCardAuthor: {
        fontSize: 12,
        color: AppColors.textMuted,
        fontStyle: 'italic',
    },
    listHeart: {
        padding: 4,
    },
});
