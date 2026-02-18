import { AppColors, Fonts } from '@/constants/theme';
import { CATEGORY_META, Quote } from '@/src/data/quotes';
import { useSaved } from '@/src/store/savedStore';
import * as Haptics from 'expo-haptics';
import { Heart, Share2 } from 'lucide-react-native';
import React from 'react';
import { Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

    const handleSave = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
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
                        color={saved ? '#C0614A' : AppColors.textMuted}
                        fill={saved ? '#C0614A' : 'transparent'}
                        strokeWidth={1.75}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.heroCard}>
            {/* Category pill */}
            <View style={[styles.categoryPill, { backgroundColor: meta.bg }]}>
                <Text style={[styles.categoryPillText, { color: meta.color }]}>
                    {meta.emoji}  {meta.label}
                </Text>
            </View>

            {/* Quote text */}
            <Text style={styles.heroText}>{quote.text}</Text>

            {/* Author */}
            <Text style={styles.heroAuthor}>— {quote.author}</Text>

            {/* Actions */}
            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionBtn} onPress={handleSave} activeOpacity={0.75}>
                    <Heart
                        size={22}
                        color={saved ? '#C0614A' : AppColors.textSecondary}
                        fill={saved ? '#C0614A' : 'transparent'}
                        strokeWidth={1.75}
                    />
                    <Text style={[styles.actionLabel, saved && { color: '#C0614A' }]}>
                        {saved ? 'Saved' : 'Save'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBtn} onPress={handleShare} activeOpacity={0.75}>
                    <Share2 size={22} color={AppColors.textSecondary} strokeWidth={1.75} />
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
        backgroundColor: AppColors.surface,
        borderRadius: 28,
        marginHorizontal: 20,
        padding: 28,
        shadowColor: '#2C1A0E',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.08,
        shadowRadius: 24,
        elevation: 5,
        alignItems: 'center',
    },
    categoryPill: {
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 6,
        marginBottom: 24,
    },
    categoryPillText: {
        fontSize: 13,
        fontWeight: '600',
        letterSpacing: 0.4,
    },
    heroText: {
        fontFamily: Fonts.serif,
        fontSize: 26,
        lineHeight: 40,
        color: AppColors.textPrimary,
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: 20,
    },
    heroAuthor: {
        fontSize: 14,
        color: AppColors.textMuted,
        fontStyle: 'italic',
        marginBottom: 32,
        textAlign: 'center',
    },
    actions: {
        flexDirection: 'row',
        gap: 32,
    },
    actionBtn: {
        alignItems: 'center',
        gap: 6,
    },
    actionLabel: {
        fontSize: 12,
        color: AppColors.textSecondary,
        fontWeight: '500',
    },

    // ─── List ────────────────────────────────────────────────────────────────────
    listCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.surface,
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 16,
        padding: 14,
        gap: 12,
        shadowColor: '#2C1A0E',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    categoryDot: {
        width: 40,
        height: 40,
        borderRadius: 12,
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
        lineHeight: 20,
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
