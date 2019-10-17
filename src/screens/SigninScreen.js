import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const SigninScreen = (props) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 200 }}>
                <NavigationEvents
                    // will focus is every time we navigate
                    // to this screen
                    // or the touchable blur this function is calling
                    // onWillFocus={() => {}}
                    // function when the screen completely focus
                    // onDidFocus={() => {}}
                    // when animation start over transition
                    onWillBlur={clearErrorMessage}
                    // when animation is completely done over transition
                    // onDidBlur={() => {}}
                />
                <AuthForm
                    headerText="Sign In to Tracker"
                    errorMessage={state.errorMessage}
                    buttonText="Sign In"
                    onSubmit={signin}
                />
                <NavLink
                    routeName="Signup"
                    text="Don't have an account? Sign up here."
                />
            </View>
        </View>
    );
}

SigninScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c95d5d',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
    }
});

export default SigninScreen;