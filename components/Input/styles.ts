import { colors } from '../../utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '100%',
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flex: 1,
        color: colors.darkGrey,
        fontSize: 14,
    },
});