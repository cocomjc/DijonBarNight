import React from "react";
import { Text, View, ImageBackground, Pressable, StyleSheet } from "react-native";
import global from '../Styles'
import TopBarReturn from '../components/TopBarReturn'
import Marker from '../components/Marker'

const Map = props => {
    const goToMap = (selection) => {
        alert('selection: ' + selection);
        //props.navigation.navigate("Map")
    };

    return (
        <View style={global.page}>
            <TopBarReturn navigation={props.navigation} />
            <View style={mapStyles.mainContainer}>
                <View style={mapStyles.titleBox}>
                    <Text style={[global.text, { textAlign: 'center' }]}>PARCOURS 1</Text>
                </View>
                <View style={mapStyles.mapContainer}>
                    <ImageBackground style={{ flex: 1, width: '100%' }} source={require('../../assets/Parcours1.png')} resizeMode={'contain'}>
                        <Marker onPress={this._onPress} top={'35%'} left={'59%'} value={'1'} />
                        <Marker onPress={this._onPress} top={'45%'} left={'64%'} value={'2'} />
                        <Marker onPress={this._onPress} top={'48%'} left={'79%'} value={'3'} />
                        <Marker onPress={this._onPress} top={'16%'} left={'87%'} value={'4'} />
                        <Marker onPress={this._onPress} top={'16%'} left={'59%'} value={'5'} />
                        <Marker onPress={this._onPress} top={'11%'} left={'50%'} value={'6'} />
                        <Marker onPress={this._onPress} top={'33%'} left={'50%'} value={'7'} />
                        <Marker onPress={this._onPress} top={'43%'} left={'14.5%'} value={'8'} />
                        <Marker onPress={this._onPress} top={'63%'} left={'25.5%'} value={'9'} />
                        <Marker onPress={this._onPress} top={'70%'} left={'-1%'} value={'10'} />
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
}

const mapStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: '30%',
    },
    mapContainer: {
        width: '90%',
        aspectRatio: 1
    },
    titleBox: {
        height: '15%',
        justifyContent: 'center',
        borderColor: '#ff4b71',
        borderWidth: 6,
    },
})


export default Map;