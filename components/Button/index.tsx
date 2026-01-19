import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
    type?: 'secondary';
    style?: any;
}
const Button = ({ title, onPress, type, style }: ButtonProps) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.6} 
            onPress={onPress} 
            hitSlop={20} // nähtamatu 20px klikitav ala nupu ümber
            style={[styles.container, style]} // Kombineerime stiilid siin
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;