import React from 'react';
import { View, Text, Image, ScrollView, Pressable, Linking } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles'; // Loo ka see fail samasse kausta
import Button from '../../components/Button';

const ProductDetails = () => {
    const { id } = useLocalSearchParams(); // Saame kätte toote ID
    const router = useRouter();

    // Kuna meil pole veel andmebaasi, loome siia näidisandmed, mis vastavad Home ekraanile
    const products = [
        { id: '1', title: 'Black Simple Lamp', price: '$ 12.00', description: 'This is a minimal and elegant lamp that fits any modern interior. Made with high-quality materials and energy-efficient LED technology.', image: require('../../assets/images/lamp.png') },
        { id: '2', title: 'Minimal Stand', price: '$ 25.00', description: 'A sturdy and sleek stand for your books or plants. Perfect for organizing your living space with a touch of style.', image: require('../../assets/images/stand.png') },
        { id: '3', title: 'Coffee Chair', price: '$ 20.00', description: 'Comfortable and stylish chair for your morning coffee routines. Ergonomic design with a classic finish.', image: require('../../assets/images/coffee_chair.png') },
        { id: '4', title: 'Simple Desk', price: '$ 50.00', description: 'A spacious desk for work or study. Simple assembly and very durable construction.', image: require('../../assets/images/desk.png') },
    ];

    // Leiame õige toote ID põhjal
    const product = products.find(p => p.id === id);

    if (!product) {
        return <Text>Product not found!</Text>;
    }

    const onBack = () => {
        router.back();
    };

    const onContact = () => {
        // Simuleerime kontakteerumist (nt avab e-maili või telefoni)
        Linking.openURL('mailto:support@furnitureapp.com');
    };

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {/* Toote pilt ja tagasi nupp */}
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={product.image} />
                    <Pressable style={styles.backButton} onPress={onBack}>
                        <Image style={styles.backIcon} source={require('../../assets/images/back.png')} />
                    </Pressable>
                </View>

                {/* Info osa */}
                <View style={styles.content}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Fikseeritud nupp all */}
            <View style={styles.footer}>
                <Button title="Contact Seller" onPress={onContact} />
            </View>
        </SafeAreaView>
    );
};

export default ProductDetails;