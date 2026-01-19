import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    content: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200, // Reguleeri vastavalt pildile
    },
    titleContainer: {
        marginVertical: 54,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.darkGrey,
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
});