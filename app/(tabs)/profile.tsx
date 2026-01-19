import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles'; // Kasutame ühiseid tabide stiile
import { useRouter } from 'expo-router';

const Profile = () => {
    const router = useRouter();

    const onLogout = () => {
        // Suuname tagasi algusesse (Splash ekraanile)
        router.replace('/'); 
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Profile</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                {/* Kasutaja pilt või ikoon */}
                <View style={{ backgroundColor: '#F5F5F5', padding: 20, borderRadius: 50 }}>
                    <Image 
                        source={require('../../assets/images/profile.png')} 
                        style={{ width: 60, height: 60 }} 
                    />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>John Doe</Text>
                <Text style={{ color: '#808080' }}>john.doe@example.com</Text>
            </View>

            <View style={{ marginTop: 40 }}>
                <Pressable style={styles.logoutButton} onPress={onLogout}>
                    <Text style={styles.logoutText}>Log Out</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Profile;