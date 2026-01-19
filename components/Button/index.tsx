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
            hitSlop={20}
            // Lisame loogika: kui tüüp on secondary, paneb ka selle stiili juurde
            style={[
                styles.container, 
                type === 'secondary' && styles.secondaryContainer, 
                style
            ]} 
        >
            <Text style={[
                styles.title, 
                type === 'secondary' && styles.secondaryTitle
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;