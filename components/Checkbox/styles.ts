import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        width: 22,
        height: 22,
        borderWidth: 2,
        borderColor: colors.grey, // Vaikimisi hall raam
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: colors.blue, // Valituna sinine taust
        borderColor: colors.blue,
    },
    checkIcon: {
        width: 12,
        height: 12,
    },
    innerSquare: {
        width: 12,
        height: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
});