import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import Map from '../components/Map'
import { withNavigationFocus} from 'react-navigation'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { MaterialIcons } from '@expo/vector-icons'

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback(location => {
        addLocation(location, recording)
    }, [recording])
    const [err] = useLocation(isFocused || recording, callback)


    return (
            <View>
            <Map />
            { err ? <Text>Please enable location services</Text> : null }
            <TrackForm />
            </View>
    );
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <MaterialIcons name="add-location" size={28} />
}

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);