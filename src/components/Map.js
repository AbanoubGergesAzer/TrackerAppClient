import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, Dimensions, ActivityIndicator
} from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = (props) => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region ={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }} >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor="rgba(158, 158, 255, 1.0)"
                fillColor="rgba(155, 158, 255, 0.3)"
            />
            <Polyline coordinates={locations.map(loc => loc.coords)} />
        </MapView>
    );
}

const mapHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    map: {
        height: mapHeight,
    }
});

export default Map;