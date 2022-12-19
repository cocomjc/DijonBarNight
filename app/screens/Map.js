import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import global from '../Styles'
import TopBarReturn from '../components/TopBarReturn'
import Marker from '../components/Marker'
import jsonData from '../SampleData.json';
import Maps from '../components/MapsLoad.js';

const Map = props => {
    const { selecInd } = props.route.params;
    let markers = [];

    for (let i = 0; i < jsonData.maps[selecInd].markers.length; i++) {
        markers.push(<Marker key={i} onPress={this._onPress} top={jsonData.maps[selecInd].markers[i].top} left={jsonData.maps[selecInd].markers[i].left} value={jsonData.maps[selecInd].markers[i].value} />)
    }

    return (
        <View style={global.page}>
            <TopBarReturn navigation={props.navigation} />
            <View style={mapStyles.mainContainer}>
                <View style={mapStyles.titleBox}>
                    <Text style={[global.text, { textAlign: 'center' }]}>PARCOURS { selecInd + 1 }</Text>
                </View>
                <View style={mapStyles.mapContainer}>
                    <ImageBackground style={{ flex: 1, width: '100%' }} source={Maps[jsonData.maps[0].name]} resizeMode={'contain'}>
                        {markers}
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