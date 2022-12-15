import React from "react";
import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import global from '../Styles'
import TopBarReturn from '../components/TopBarReturn'

const Map = props => {
    const goToMap = (selection) => {
        alert('selection: ' + selection);
        //props.navigation.navigate("Map")
    };

    return (
        <View style={global.page}>
            <TopBarReturn navigation={props.navigation}/>
        </View>
    );
}


export default Map;