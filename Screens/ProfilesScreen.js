import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfilesScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image source={require('../assets/logo.jpg')} size={80} />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={styles.title}>DENNIS</Title>
                        <Caption style={styles.caption}>@denis</Caption>
                    </View>
                </View>
            </View>
            {/* user information section */}
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='map-marker-radius' size={20} color='#FF10F0' />
                    <Text style={{ color: '#FF10F0', marginLeft: 20 }}>Nairobi, Kenya</Text>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='phone' size={20} color='#FF10F0' />
                    <Text style={{ color: '#FF10F0', marginLeft: 20 }}>+254 792 656 398</Text>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name='email' size={20} color='#FF10F0' />
                    <Text style={{ color: '#FF10F0', marginLeft: 20 }}>denis@gmail.com</Text>
                </View>
            </View>
            <View style={styles.InfoBoxWrapper}>
                <View style={[styles.InfoBox, { borderRightColor: '#FF10F0', borderRightWidth: 1 }]}>
                    <Title style={styles.title}>Kshs. 1000</Title>
                    <Caption style={styles.caption}>Wallet</Caption>
                </View>
                <View style={styles.InfoBox}>
                    <Title style={styles.title}>10</Title>
                    <Caption style={styles.caption}>Orders</Caption>
                </View>
            </View>
            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name='heart-outline' size={24} color='#FF10F0' />
                        <Text style={styles.menuItemText}>Favourites</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name='share-outline' size={24} color='#FF10F0' />
                        <Text style={styles.menuItemText}>Share</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name='account-check-outline' size={24} color='#FF10F0' />
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name='credit-card' size={24} color='#FF10F0' />
                        <Text style={styles.menuItemText}>Payments</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.menuItem}>
                        <Icon name='update' size={24} color='#FF10F0' />
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    )
}

export default ProfilesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    InfoBoxWrapper: {
        borderBottomColor: '#FF10F0',
        borderBottomWidth: 1,
        borderTopColor: '#FF10F0',
        borderTopWidth: 1,
        height: 100,
        flexDirection: 'row',
    },
    InfoBox: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        flexDirection: 'row',
    },
    menuItemText: {
        marginLeft: 20,
        color: '#FF10F0',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: '600',
    },
});