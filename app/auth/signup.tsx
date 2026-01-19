import React, {useState} from 'react';
import { SafeAreaView, ScrollView, Text, Pressable, Image, View } from 'react-native';
import { styles } from './styles';
import { useRouter } from 'expo-router';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
const SignUp = () => {
    const router = useRouter();
    const [checked, setChecked] = useState(false);
        const onBack = () => {
        router.back();
    };
    const handleSignUp = () => {
        router.replace('/(tabs)');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Tagasi nupp */}
                <View style={styles.header}>
                <Pressable hitSlop={20} onPress={onBack}>
                    <Image 
                        style={styles.backArrow} 
                        source={require('../../assets/images/back.png')} // Veendu, et fail on olemas
                    />
                </Pressable>
                {/* Siia tuleb tagasi-nool ja pealkiri vastavalt disainile */}
                <Text style={styles.title}>Sign Up</Text>
                </View>
                
                {/* Järgmiseks loome Input komponendid */}
                <Input label="Name" placeholder="John Doe" />
                <Input label="E-mail" placeholder="example@gmail.com" />
                <Input label="Password" placeholder="********" isPassword={true} />
                {/* Siia tulevad järgmiseks Checkbox ja nupud */}
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>
                        I agree with <Text style={styles.agreeTextBold}>Terms & Privacy</Text>
                    </Text>
                </View>
                {/* Sign Up Nupp */}
                <Button title="Sign Up" onPress={handleSignUp} />

                {/* Eraldaja joontega */}
                <View style={styles.separatorContainer}>
                    <View style={styles.line} />
                    <Text style={styles.separatorText}>Or sign up with</Text>
                    <View style={styles.line} />
                </View>

                {/* Google nupp */}
                <Pressable style={styles.googleButton}>
                    <Image style={styles.googleIcon} source={require('../../assets/images/google.png')} />
                </Pressable>

                {/* Link sisselogimisele */}
                <Text style={styles.footerText}>
                    Already have an account? 
                    <Text onPress={() => router.push('/auth/signin')} style={styles.footerLinkBold}> Sign In</Text>
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;