import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ProfilesScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Profile Screen</Text>
        </View>
    )
}

export default ProfilesScreen;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});