import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Settings Screen</Text>
        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});