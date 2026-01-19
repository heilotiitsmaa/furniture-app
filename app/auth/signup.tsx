import React from 'react';
import { Text, View, SafeAreaView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './styles'; // Loome selle järgmise sammuna

const SignUp = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Sign Up</Text>
                
                {/* Siia tulevad hiljem Input komponendid */}
                
                <Pressable onPress={() => router.back()}>
                    <Text style={styles.backText}>Go Back</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;