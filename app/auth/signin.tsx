import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Pressable, Image } from 'react-native';
import { styles } from '../../styles/auth.styles';
import { useRouter } from 'expo-router';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = () => {
    const router = useRouter();

    const handleSignIn = () => {
        // Siia tuleks tulevikus päris kontroll, hetkel lihtsalt suuname
        router.replace('/(tabs)'); // replace eemaldab sisselogimise lehe ajaloost
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Pressable hitSlop={20} onPress={() => router.back()}>
                        <Image style={styles.backArrow} source={require('../../assets/images/back.png')} />
                    </Pressable>
                    <Text style={styles.title}>Sign In</Text>
                </View>

                <Input label="E-mail" placeholder="example@gmail.com" />
                <Input label="Password" placeholder="********" isPassword={true} />

                <Button title="Sign In" onPress={handleSignIn} />

                <View style={styles.separatorContainer}>
                    <View style={styles.line} />
                    <Text style={styles.separatorText}>Or sign in with</Text>
                    <View style={styles.line} />
                </View>

                <Pressable style={styles.googleButton}>
                    <Image style={styles.googleIcon} source={require('../../assets/images/google.png')} />
                </Pressable>

                <Text style={styles.footerText}>
                    Don't have an account? 
                    <Text onPress={() => router.push('/auth/signup')} style={styles.footerLinkBold}> Sign Up</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;