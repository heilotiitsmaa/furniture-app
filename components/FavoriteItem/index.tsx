import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const FavoriteItem = ({ item, onRemove, onPress }: any) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <Pressable onPress={onRemove} style={styles.removeButton}>
                <Image 
                    source={require('../../assets/images/close.png')} 
                    style={styles.closeIcon} 
                />
            </Pressable>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        marginHorizontal: 20,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
    },
    content: {
        flex: 1,
        marginLeft: 15,
    },
    title: {
        fontSize: 14,
        color: '#808080',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#303030',
    },
    removeButton: {
        padding: 5,
    },
    closeIcon: {
        width: 24,
        height: 24,
    }
});

export default FavoriteItem;