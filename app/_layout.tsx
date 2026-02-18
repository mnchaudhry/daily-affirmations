import { SavedProvider } from '@/src/store/savedStore';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function RootLayout() {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SavedProvider>
        <Stack
          initialRouteName="(drawer)"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
            animation: 'fade',
          }}
        >
          <Stack.Screen name="(drawer)" />
        </Stack>
        <StatusBar style="light" />
      </SavedProvider>
    </GestureHandlerRootView>
  );
}


