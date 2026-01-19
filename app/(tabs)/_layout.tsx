import React from 'react';
import { Image } from 'react-native';
import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4F63AC', // Sinu brändi sinine
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0, // Eemaldame piirjoone puhtama vaate jaoks
          elevation: 10,
          height: 60,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/home_active.png')
                  : require('../../assets/images/home.png')
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore" // Võid selle hiljem ümber nimetada "favorites.tsx"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/marker_active.png')
                  : require('../../assets/images/marker.png')
              }
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      {/* Kui sul on profiili fail, lisa ka see siia */}
      <Tabs.Screen
  name="profile"
  options={{
    title: 'Profile',
    tabBarIcon: ({ focused }) => (
      <Image
        source={
          focused
            ? require('../../assets/images/profile_active.png')
            : require('../../assets/images/profile.png')
        }
        style={{ width: 24, height: 24 }}
      />
    ),
  }}
/>
    </Tabs>
  );
}
