import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import global from '../Styles'

const TopBarReturn = props => {
    const goToBack = () => {
        props.navigation.goBack()
    };

    return (
        <View style={backBar.container}>
            <Pressable style={backBar.button} onPress={goToBack}>
                <Icon name="arrow-back-circle" size={40} color="#ff4b71" />
            </Pressable>
        </View>
    );
}

const backBar = StyleSheet.create({
    container: {
        width: '100%',
        height: '8%',
        justifyContent: 'center',
    },
    button: {
        height: 40,
        width: 40,
        marginHorizontal: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    }
});

export default TopBarReturn;