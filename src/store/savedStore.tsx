import { Quote } from '@/src/data/quotes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

//////////////////////////////////////////// TYPES ////////////////////////////////////////////

interface SavedStore {
  saved: Quote[];
  isSaved: (id: string) => boolean;
  toggleSave: (quote: Quote) => void;
}

//////////////////////////////////////////// CONTEXT ////////////////////////////////////////////

const STORAGE_KEY = '@daily_quotes_saved';

const SavedContext = createContext<SavedStore>({
  saved: [],
  isSaved: () => false,
  toggleSave: () => {},
});

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [saved, setSaved] = useState<Quote[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((raw) => {
      if (raw) setSaved(JSON.parse(raw));
    });
  }, []);

  const persist = useCallback((next: Quote[]) => {
    setSaved(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const isSaved = useCallback((id: string) => saved.some((q) => q.id === id), [saved]);

  const toggleSave = useCallback(
    (quote: Quote) => {
      const exists = saved.some((q) => q.id === quote.id);
      persist(exists ? saved.filter((q) => q.id !== quote.id) : [quote, ...saved]);
    },
    [saved, persist],
  );

  return (
    <SavedContext.Provider value={{ saved, isSaved, toggleSave }}>
      {children}
    </SavedContext.Provider>
  );
}

export const useSaved = () => useContext(SavedContext);
