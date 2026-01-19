import React from 'react';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // Expo Routeri Stack teab ise, et on konteineri sees
    <Stack screenOptions={{ headerShown: false }}>
      {/* index vastab failile app/index.tsx (Splash) */}
      <Stack.Screen name="index" /> 
      {/* auth/signup vastab failile app/auth/signup.tsx */}
      <Stack.Screen name="auth/signup" />
      {/* auth/signin vastab failile app/auth/signin.tsx */}
      <Stack.Screen name="auth/signin" />
    </Stack>
  );
}