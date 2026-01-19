import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = ({ title, onPress, type }: { title: string, onPress: () => void, type?: 'secondary' }) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.6} 
            onPress={onPress} 
            hitSlop={20} // nähtamatu 20px klikitav ala nupu ümber
            style={[styles.container, type === 'secondary' ? styles.secondaryContainer : {}]}
        >
            <Text style={[styles.title, type === 'secondary' ? styles.secondaryTitle : {}]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;