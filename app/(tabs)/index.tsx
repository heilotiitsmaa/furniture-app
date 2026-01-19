import React from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
    // Näidisandmed kategooriate jaoks
    const categories = [
        { id: '1', title: 'Popular', image: require('../../assets/images/star.png') },
        { id: '2', title: 'Chair', image: require('../../assets/images/chair.png') },
        { id: '3', title: 'Table', image: require('../../assets/images/table.png') },
        { id: '4', title: 'Armchair', image: require('../../assets/images/armchair.png') },
        { id: '5', title: 'Bed', image: require('../../assets/images/bed.png') },
        { id: '6', title: 'Lamp', image: require('../../assets/images/lamp.png') },

    ];

    const products = [
        { id: '1', title: 'Black Simple Lamp', price: '$ 12.00', image: require('../../assets/images/lamp.png') },
        { id: '2', title: 'Minimal Stand', price: '$ 25.00', image: require('../../assets/images/stand.png') },
        { id: '3', title: 'Coffee Chair', price: '$ 20.00', image: require('../../assets/images/coffee_chair.png') },
        { id: '4', title: 'Simple Desk', price: '$ 50.00', image: require('../../assets/images/desk.png') },
    ];

    const renderProduct = ({ item }: any) => (
        <Pressable 
            style={styles.productContainer} 
            onPress={() => router.push(`/product/${item.id}`)}
        >
            <Image style={styles.productImage} source={item.image} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </Pressable>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                numColumns={2} // Teeb toodete ruudustiku kaheks veerguks
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(
                    <>
                        <View style={styles.header}>
                            <Pressable hitSlop={20}>
                                <Image style={styles.icon} source={require('../../assets/images/search.png')} />
                            </Pressable>
                            <Text style={styles.headerTitle}>Find All You Need</Text>
                            <View style={{ width: 24 }} />
                        </View>

                        <Text style={styles.sectionTitle}>Categories</Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={categories}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.categoryContainer}>
                                    <View style={styles.categoryIconBox}>
                                        <Image style={styles.categoryIcon} source={item.image} />
                                    </View>
                                    <Text style={styles.categoryText}>{item.title}</Text>
                                </View>
                            )}
                            style={styles.categoriesList}
                        />
                    </>
                )}
            />
        </SafeAreaView>
    );
};

export default Home;