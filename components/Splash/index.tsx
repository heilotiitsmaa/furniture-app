import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // Parem teek mobiili jaoks
import Button from '../Button';
import { styles } from './styles';
import { useRouter } from 'expo-router';

const Splash = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image 
                    source={require('../../assets/images/splash_image.png')} 
                    style={styles.image} 
                    resizeMode="contain"/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You&apos;ll Find</Text>
                    <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                    <Text style={styles.title}>Here!</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Sign Up" onPress={() => router.push('/auth/signup')} />
                    <Button title="Sign In" type="secondary" onPress={() => console.log('Sign In')} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Splash;