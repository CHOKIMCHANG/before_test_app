import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function MapShow({route}) {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                <TextInput style={styles.input} />
            <Marker
                coordinate={{latitude: route.params.b1.latitude, longitude:route.params.b1.longitude}}  
                title={route.params.b1.latitude.toString()}
                description={route.params.b1.longitude.toString()}
            />
            <Marker
                coordinate={{latitude: route.params.b2.latitude, longitude:route.params.b2.longitude}}  
                title="m2"
                description="m2"
            />
            <Marker
                coordinate={{latitude: route.params.b3.latitude, longitude:route.params.b3.longitude}}  
                title="m3"
                description="m3"
            />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"white",
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    myLoc: {
    },
    input: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginVertical: 80,
        fontSize: 18,
      },
})