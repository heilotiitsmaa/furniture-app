import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { styles } from './styles';

const Input = ({ label, placeholder, isPassword, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    secureTextEntry={isPassword}
                    placeholder={placeholder}
                    style={styles.input}
                    placeholderTextColor="#8D9BB5"
                    {...props}
                />
            </View>
        </View>
    );
};

export default Input;