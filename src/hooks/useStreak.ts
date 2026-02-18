import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const STREAK_KEY = '@daily_quotes_streak';
const LAST_OPEN_KEY = '@daily_quotes_last_open';

function toDateStr(d: Date) {
    return d.toISOString().split('T')[0];
}

export function useStreak() {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        (async () => {
            const today = toDateStr(new Date());
            const raw = await AsyncStorage.getItem(STREAK_KEY);
            const last = await AsyncStorage.getItem(LAST_OPEN_KEY);

            let count = raw ? parseInt(raw, 10) : 0;

            if (last === today) {
                // Already opened today — just show current streak
                setStreak(count);
                return;
            }

            const yesterday = toDateStr(new Date(Date.now() - 86400000));
            if (last === yesterday) {
                count += 1; // Continuous streak
            } else {
                count = 1; // Reset
            }

            await AsyncStorage.setItem(STREAK_KEY, String(count));
            await AsyncStorage.setItem(LAST_OPEN_KEY, today);
            setStreak(count);
        })();
    }, []);

    return streak;
}
