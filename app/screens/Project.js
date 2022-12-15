import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import global from '../Styles'
import TopBarReturn from '../components/TopBarReturn'

const Project = props => {
    const goToSelecMenu = () => {
        props.navigation.navigate("SelecMenu")
    };

    return (
        <View style={global.page}>
            <TopBarReturn navigation={props.navigation}/>
            <View  style={global.container}>
                <View>
                    <Text style={[global.text, {textAlign: 'center'}]}>Projet: allier culture et fun, amener les étudiants à la culture par le divertissement + faire fonctionner les bars dijonnais d’une autre manière. Cible: BDE Diiage à court terme / autre BDE à long terme: leur offrir des soirées Baraton clé en main{"\n"}{"\n"}Slogan:{"\n"} “ Culture et gueule de bois”</Text>
                </View>
                <Pressable style={global.button} onPress={goToSelecMenu}>
                   <Text style={global.text} >PAGE D'ACCEUIL</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Project;