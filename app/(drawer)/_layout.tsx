import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

//////////////////////////////////////////// COMPONENT ////////////////////////////////////////////

export default function DrawerLayout() {
  ////////////////////////////////////////// RENDER //////////////////////////////////////////
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: Colors.light.tint,
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: { marginLeft: -20 },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Daily Affirmations',
            drawerIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          }}
        />
        {/* Placeholder for other drawer items if needed later */}
      </Drawer>
    </GestureHandlerRootView>
  );
}

