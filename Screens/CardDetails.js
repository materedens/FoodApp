import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CardDetails = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Card Details Screen</Text>
        </View>
    );
}

export default CardDetails;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});