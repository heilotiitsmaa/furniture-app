import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 300, // Reguleeri vastavalt pildile
    },
    titleContainer: {
        marginVertical: 32,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#303030',
    },
    innerTitle: {
        color: '#FCA311', // Oranž pildilt
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
    },
});