import React, { useState, useCallback } from 'react';
import { FlatList, Text, View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { styles } from 'styles';
import FavoriteItem from '../../components/FavoriteItem';

const Favorites = () => {
    const [favorites, setFavorites] = useState<any[]>([]);
    const router = useRouter();

    const products = [
        { id: '1', title: 'Minimal Lamp', price: '$ 12.00', image: require('../../assets/images/lamp.png') },
        { id: '2', title: 'Minimal Stand', price: '$ 25.00', image: require('../../assets/images/stand.png') },
        { id: '3', title: 'Coffee Chair', price: '$ 20.00', image: require('../../assets/images/coffee_chair.png') },
        { id: '4', title: 'Minimal Desk', price: '$ 50.00', image: require('../../assets/images/desk.png') },
    ];

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    const loadFavorites = async () => {
        const savedFavorites = await AsyncStorage.getItem('favorites');
        if (savedFavorites) {
            const favoriteIds = JSON.parse(savedFavorites);
            const filteredProducts = products.filter(p => favoriteIds.includes(p.id));
            setFavorites(filteredProducts);
        }
    };

    const handleRemove = async (id: string) => {
        const savedFavorites = await AsyncStorage.getItem('favorites');
        let favoritesIds = savedFavorites ? JSON.parse(savedFavorites) : [];
        
        favoritesIds = favoritesIds.filter((favId: string) => favId !== id);
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesIds));
        
        // Uuendame kohe ka ekraani
        loadFavorites();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ padding: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Favorites</Text>
            </View>

            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <FavoriteItem 
                        item={item} 
                        onPress={() => router.push(`/product/${item.id}`)}
                        onRemove={() => handleRemove(item.id)}
                    />
                )}
                ListEmptyComponent={
                    <Text style={{ textAlign: 'center', marginTop: 50, color: '#808080' }}>
                        No favorites yet.
                    </Text>
                }
            />
        </SafeAreaView>
    );
};

export default Favorites;