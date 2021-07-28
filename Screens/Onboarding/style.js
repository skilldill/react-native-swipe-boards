import {StyleSheet} from "react-native";

export const onboardingStyle = StyleSheet.create({
    container: {
        flex: 1
    },

    board: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e0e0e0',
        borderWidth: 1
    },

    boardText: {
        fontWeight: '600',
        fontSize: 50,
        marginBottom: 300
    }
})