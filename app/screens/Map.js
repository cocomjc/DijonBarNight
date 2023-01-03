import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import global from '../Styles'
import TopBarReturn from '../components/TopBarReturn'
import Marker from '../components/Marker'
import jsonData from '../SampleData.json';
import MapImages from '../components/MapsLoad.js';
import { app, db, getFirestore, collection, addDoc, getDocs } from '../firebase/index.js';

const Map = props => {
    const { mapId } = props.route.params;
    const [mapParam, setMapParam] = useState([]);
    let markers = [];

    const getMapParam = async () => {
        try {
            const snapshot = await getDocs(collection(db, "parcours"));
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            else {
                snapshot.forEach((doc) => {
                    if (doc.id == mapId) {
                        console.log(doc.id, '=>', doc.data());
                        setMapParam(doc.data());
                    }
                });
            }
        }
        catch (error) {
            console.log("ya erreur chef" + error);
        }
    }

    useEffect(() => {
        getMapParam();
    }, []);

    if (Object.entries(mapParam).length != 0) {
        for (const [key, value] of Object.entries(mapParam.markers)) {
            console.log(`${key}: ${value}`);
            markers.push(<Marker key={key} onPress={this._onPress} top={value[0]} left={value[1]} value={key} />)
        }
    }

    return (
        <View style={global.page}>
            <TopBarReturn navigation={props.navigation} />
            <View style={mapStyles.mainContainer}>
                <View style={mapStyles.titleBox}>
                    <Text style={[global.text, { textAlign: 'center' }]}>{ mapParam.name }</Text>
                </View>
                <View style={mapStyles.mapContainer}>
                    <ImageBackground style={{ flex: 1, width: '100%' }} source={MapImages[mapParam.name]} resizeMode={'contain'}>
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