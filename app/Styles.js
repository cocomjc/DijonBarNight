import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: '10%',
        marginVertical: '20%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#790028',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#996432',
    },
    text: {
        fontSize: 20,
        color: '#fff',
    }
});