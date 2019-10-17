import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = (props) => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()

    return (
      <View style={styles.form}>
        <Input
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={changeName}
            containerStyle={{ backgroundColor: 'rgba(255,255,255,0)' }}
            placeholder="Enter Track Name" />
        <Spacer />
        { recording
            ? <Button buttonStyle={{backgroundColor: 'red'}} title="Stop" onPress={stopRecording}/>
            : <Button title="Start tracking" onPress={startRecording}/>
        }
        <Spacer />
        {
            !recording && locations.length
            ? <Button onPress={saveTrack} title="Save" buttonStyle={{backgroundColor: 'red'}} />
            : null
        }
      </View>
    );
}

const styles = StyleSheet.create({
    form: {
        position: 'absolute',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 25,
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 20,
        bottom: 100,
        right: 0,
        left: 0,
    }
});

export default TrackForm;