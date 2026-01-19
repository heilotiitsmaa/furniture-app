import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height } = Dimensions.get('window');

export const productStyles = StyleSheet.create({ // Nimetasin 'styles' -> 'productStyles'
    safe: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: height * 0.45,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 8,
        // --- VARJU PARANDUS SIIN ---
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
            android: {
                elevation: 5,
            },
            web: {
                boxShadow: '0px 2px 3.84px rgba(0,0,0,0.25)',
            }
        }),
    },
    backIcon: {
        width: 20,
        height: 20,
    },
    content: {
        padding: 24,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -20,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#303030',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#303030',
        marginVertical: 8,
    },
    description: {
        fontSize: 14,
        color: '#606060',
        lineHeight: 22,
        marginTop: 8,
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    markerButton: {
        backgroundColor: '#F0F0F0',
        padding: 15,
        borderRadius: 8,
    },
    markerButtonActive: {
        backgroundColor: '#4F63AC',
    },
    markerIcon: {
        width: 24,
        height: 24,
        tintColor: '#4F63AC',
    },
});