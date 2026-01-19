import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 30,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#303030',
    },
    icon: {
        width: 24,
        height: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 15,
    },
    categoriesList: {
        maxHeight: 100,
        marginBottom: 30,
        marginTop: 15,
    },
    categoryContainer: {
        alignItems: 'center',
        marginRight: 20,
    },
    categoryIconBox: {
        backgroundColor: '#F5F5F5',
        padding: 15,
        borderRadius: 15,
        marginBottom: 5,
    },
    categoryIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    categoryText: {
        fontSize: 12,
        color: '#808080',
    },
    columnWrapper: {
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    productContainer: {
        width: '46%', // Kasutame 46%, et jätta keskele ~8% vaba ruumi
        marginBottom: 24, // See lisab "õhku" ridade vahele (vertikaalne vahe)
    },

    productImage: {
        width: '100%',
        height: 220, // Suurendame veidi kõrgust, et sarnaneda näidisele
        borderRadius: 12, // Ümarad nurgad nagu pildil
        backgroundColor: '#F5F5F5', 
    },

    productTitle: {
        fontSize: 14,
        color: '#606060',
        marginTop: 12, // Ruum pildi ja teksti vahel
    },

    productPrice: {
        fontSize: 16, // Veidi suurem ja selgem
        fontWeight: 'bold',
        color: '#303030',
        marginTop: 4,
    },
    logoutButton: {
        backgroundColor: '#F5F5F5',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    logoutText: {
        color: '#FF4B4B', // Punane väljalogimise tekst
        fontWeight: 'bold',
        fontSize: 16,
    }
});