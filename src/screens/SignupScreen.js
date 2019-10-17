import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import Spacer from '../components/Spacer'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext)

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
                    headerText="Sign Up for Tracker"
                    errorMessage={state.errorMessage}
                    buttonText="Sign Up"
                    onSubmit={signup}
                />
                <NavLink
                    routeName="Signin"
                    text="Already have an account? Sign in insted"
                />
            </View>
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#107dac',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
    }
});

export default SignupScreen;