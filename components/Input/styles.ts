import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        color: colors.blue, // Siltide värv disainis
        fontSize: 14,
        fontWeight: '500',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey, // Hall raam
        borderRadius: 14,
        paddingHorizontal: 16,
    },
    input: {
        paddingVertical: 16,
        fontSize: 14,
        color: colors.black,
    },
});