import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';

const Input = ({ label, placeholder, isPassword = false, ...props }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder={placeholder}
                    secureTextEntry={isPassword} // Parooli varjamiseks
                    style={styles.input}
                    {...props}
                />
            </View>
        </View>
    );
};

export default Input;