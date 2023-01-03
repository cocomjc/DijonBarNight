import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import global from '../Styles'

const ParcourItem = props => {
    const goToMap = () => {
        console.log("goToMap: " + props.id);
        props.navigation.navigate("Map", { mapId: props.id })
    };

    return (
        <View>
            <Pressable style={parcourItem.button} onPress={() => { goToMap(0) }}>
                <Text style={global.text} >{props.name}: {props.price}</Text>
            </Pressable>
        </View>
    );
}

const parcourItem = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '8%',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#ff4b71',
    }
});

export default ParcourItem;