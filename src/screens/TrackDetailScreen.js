import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'

var trackName = ''

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext)
    const _id = navigation.getParam('_id')

    const track = state.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords
    trackName = track.name
    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    ...initialCoords,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01
                }}
            >
                <Polyline
                    coordinates={track.locations.map(loc => loc.coords)}
                />
            </MapView>
        </View>
    );
}

TrackDetailScreen.navigationOptions = () => {
    return {
        title: `${trackName}`
    }
}

const mapHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    map: {
        height: mapHeight
    }
});

export default TrackDetailScreen;