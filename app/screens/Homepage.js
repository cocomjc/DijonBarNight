import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import global from '../Styles'

const Homepage = props => {
    const goToPathway = () => {
        props.navigation.navigate("Project")
    };

    return (
        <View style={global.page}>
            <View style={global.container}>
                <Image source={require('../../assets/HomeLogo.png')} style={{width: '100%'}} resizeMode={'contain'}/>
                <Pressable style={global.button} onPress={goToPathway}>
                   <Text style={global.text}>COMMENCER</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Homepage;