import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Pressable, Linking } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import Button from '../../components/Button';

const ProductDetails = () => {
    const { id } = useLocalSearchParams();
    const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();

    const products = [
        { id: '1', title: 'Black Simple Lamp', price: '$ 12.00', description: 'This is a minimal and elegant lamp that fits any modern interior. Made with high-quality materials and energy-efficient LED technology.', image: require('../../assets/images/lamp.png') },
        { id: '2', title: 'Minimal Stand', price: '$ 25.00', description: 'A sturdy and sleek stand for your books or plants. Perfect for organizing your living space with a touch of style.', image: require('../../assets/images/stand.png') },
        { id: '3', title: 'Coffee Chair', price: '$ 20.00', description: 'Comfortable and stylish chair for your morning coffee routines. Ergonomic design with a classic finish.', image: require('../../assets/images/coffee_chair.png') },
        { id: '4', title: 'Simple Desk', price: '$ 50.00', description: 'A spacious desk for work or study. Simple assembly and very durable construction.', image: require('../../assets/images/desk.png') },
    ];

    const product = products.find(p => p.id === id);

    useEffect(() => {
        checkIfFavorite();
    }, [id]);

    const checkIfFavorite = async () => {
        const savedFavorites = await AsyncStorage.getItem('favorites');
        if (savedFavorites) {
            const favorites = JSON.parse(savedFavorites);
            setIsFavorite(favorites.includes(id));
        }
    };

    const toggleFavorite = async () => {
        const savedFavorites = await AsyncStorage.getItem('favorites');
        let favorites = savedFavorites ? JSON.parse(savedFavorites) : [];

        if (isFavorite) {
            favorites = favorites.filter((favId: string) => favId !== id);
        } else {
            favorites.push(id);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
    };

    if (!product) {
        return <SafeAreaView style={styles.safe}><Text>Product not found!</Text></SafeAreaView>;
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* Ülemine pilt ja tagasi nupp */}
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={product.image} />
                    <Pressable style={styles.backButton} onPress={() => router.back()}>
                        <Image style={styles.backIcon} source={require('../../assets/images/back.png')} />
                    </Pressable>
                </View>

                {/* Tekstiline sisu */}
                <View style={styles.content}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Jalus kahe nupuga kõrvuti */}
            <View style={styles.footer}>
                <Pressable 
                    style={[styles.markerButton, isFavorite && styles.markerButtonActive]} 
                    onPress={toggleFavorite}
                >
                    <Image 
                        source={require('../../assets/images/marker.png')} 
                        style={[styles.markerIcon, isFavorite && { tintColor: '#FFFFFF' }]} 
                    />
                </Pressable>
                
                {/* Kasutame View'd ümber nupu, et see täidaks ülejäänud ruumi */}
                <View style={{ flex: 1 }}>
                    <Button 
                        title="Contact Seller" 
                        onPress={() => Linking.openURL('mailto:support@furnitureapp.com')} 
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProductDetails;