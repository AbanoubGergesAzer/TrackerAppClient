import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'
import { MaterialIcons, SimpleLineIcons } from '@expo/vector-icons'

const AccountScreen = (props) => {
    const { signout } = useContext(AuthContext)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 16, marginVertical: 7, fontWeight: '500' }}>
                    Account Screen
                </Text>
            </View>
            <Spacer>
                <Button
                    title="Sign Out"
                    icon={<SimpleLineIcons style={{marginRight: 10, color: '#ffffff'}} name="logout" size={16}/>}
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    );
}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <MaterialIcons name='settings' size={28} />
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.3)',
        marginVertical: 5,
        paddingBottom: 5,
        alignItems: 'center'
    }
});

export default AccountScreen;