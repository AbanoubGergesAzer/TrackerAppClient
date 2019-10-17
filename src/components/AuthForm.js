import React, { useState } from 'react';
import {
  Text, Button, Input
} from 'react-native-elements';
import { View, StyleSheet } from 'react-native'
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
        <Spacer>
            <Text h3 style={styles.header}>{headerText}</Text>
        </Spacer>
            <Input
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                label="Email"
                labelStyle={{ color: 'white' }} inputStyle={{ color: 'white' }}
            />
        <Spacer />
            <Input
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                label="Password"
                value={password}
                onChangeText={setPassword}
                labelStyle={{ color: 'white' }} inputStyle={{ color: 'white' }}
            />
        {errorMessage ? <View style={{ borderRadius: 25, margin: 15, backgroundColor: '#ffffff', padding: 5 }}><Text style={styles.errorMessage}>{errorMessage}</Text></View> : null }
        <Spacer>
            <Button
                onPress={() => {
                    onSubmit({ email, password })
                }}
                title={buttonText}
                buttonStyle={{ backgroundColor: '#ffffff'}} titleStyle={{ color: '#000000', fontWeight: 'bold' }}
            />
        </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        alignSelf: 'center'
    },
});

export default AuthForm;