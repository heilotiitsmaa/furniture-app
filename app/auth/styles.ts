import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#DADADA', // Helehall joon
    },
    separatorText: {
        marginHorizontal: 12,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500',
    },
    googleButton: {
        backgroundColor: '#304155', // Tumehall/must taust nagu disainis
        borderRadius: 14,
        padding: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    googleIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    footerText: {
        color: colors.blue,
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 40,
    },
    footerLinkBold: {
        fontWeight: 'bold',
    },
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32,
        marginTop: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.blue, // Disainis on "Sign Up" sinine
        marginVertical: 32,
    },
    backArrow: {
        width: 20,
        height: 20,
        marginBottom: 16,
        resizeMode: 'contain',
        marginTop: 20, //noole kõrgus S tähe suhtes
    },
    agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
},
agreeText: {
    color: colors.blue,
    marginLeft: 12, 
    fontSize: 14,
},
agreeTextBold: {
    fontWeight: 'bold',
    textDecorationLine: 'underline', // Allajoonitud tekst
},
});