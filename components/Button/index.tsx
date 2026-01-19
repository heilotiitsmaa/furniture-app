import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = ({ title, onPress, type = 'primary' }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container, type === 'secondary' ? styles.secondaryContainer : {}]}
        >
            <Text style={[styles.title, type === 'secondary' ? styles.secondaryTitle : {}]}>
                {title}
                </Text>
        </TouchableOpacity>
    );
};

export default Button;