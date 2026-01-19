import React from 'react';
import { Pressable, View, Image } from 'react-native';
import { styles } from './styles';

const Checkbox = ({ checked, onCheck }: any) => {
    return (
        <Pressable 
            style={[styles.container, checked ? styles.checked : {}]} 
            onPress={() => onCheck(!checked)}
        >
            {checked && <Image style={styles.checkIcon} source={require('../../assets/images/check.png')} />}
        </Pressable>
    );
};

export default Checkbox;