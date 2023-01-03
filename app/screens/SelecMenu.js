import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Pressable, StyleSheet, ActivityIndicator } from "react-native";
import global from '../Styles'
import TopBarReturn from '../components/TopBarReturn'
import { app, db, getFirestore, collection, addDoc, getDocs } from '../firebase/index.js';
import ParcourItem from "../components/ParcourItem";

const SelecMenu = props => {
    const [parcoursList, setParcoursList] = useState([]);
    
    const getMaps = async () => {
        try {
            const snapshot = await getDocs(collection(db, "parcours"));
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            else {
                setParcoursList(
                    snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                );
                snapshot.forEach((doc) => {
                    console.log(doc.id, '=>', doc.data());
                });
            }
        }
        catch (error) {
            console.log("ya erreur chef" + error);
        }
    }

    useEffect(() => {
        getMaps();
    }, []);
    
    return (
        <View style={global.page}>
            <TopBarReturn navigation={props.navigation}/>
            <View style={global.container}>
                <View style={selecMenu.titleBox}>
                    <Text style={[global.text, {textAlign: 'center'}]}>Choisissez votre parcours</Text>
                </View>
                {parcoursList.length > 0 ? (
                    <FlatList
                        data={parcoursList}
                        renderItem={({ item }) => <ParcourItem name={item.name} price={item.price} id={item.id} navigation={props.navigation} />}
                        keyExtractor={item => item.id}
                    />
                ) : (
                    <ActivityIndicator />
                )}
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
});


export default SelecMenu;