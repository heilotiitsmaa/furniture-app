import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Splash from '../../components/Splash';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Splash />
    </View>
  );
}