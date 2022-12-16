import React from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import global from '../Styles'
import TopBarReturn from '../components/TopBarReturn'

const SelecMenu = props => {
    const goToMap = (selection) => {
        alert('selection: ' + selection);
        props.navigation.navigate("Map")
    };

    return (
        <View style={global.page}>
            <TopBarReturn navigation={props.navigation}/>
            <View  style={global.container}>
                <View style={selecMenu.titleBox}>
                    <Text style={[global.text, {textAlign: 'center'}]}>Choisissez votre parcours</Text>
                </View>
                <Pressable style={selecMenu.button} onPress={() => {goToMap(1)}}>
                    <Text style={global.text} >PARCOURS 1: €</Text>
                    </Pressable>
                <Pressable style={selecMenu.button} onPress={() => {goToMap(2)}}>
                    <Text style={global.text} >PARCOURS 2: €€</Text>
                </Pressable>
                <Pressable style={selecMenu.button} onPress={() => {goToMap(3)}}>
                    <Text style={global.text} >PARCOURS 3: €€€</Text>
                </Pressable>
            </View>
        </View>
    );
}

const selecMenu = StyleSheet.create({
    titleBox: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        backgroundColor: '#ff4b71',
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


export default SelecMenu;