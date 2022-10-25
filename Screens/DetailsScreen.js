import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}>Details Screen</Text>
            {/* Same screen navigation */}
            <Button
                title='Repeat Details'
                onPress={() => navigation.push('Detail')}
            />
            {/* First screen navigation */}
            <Button
                title="Go to Home" onPress={() => navigation.navigate('Home')} />
            {/* First screen navigation */}
            <Button
                title="Go back" onPress={() => navigation.goBack()} />
            {/* Pop back to home screen */}
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
    }
});