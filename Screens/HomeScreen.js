import React from 'react';
import {
    View, Text, Image,
    StyleSheet, StatusBar,
    TouchableOpacity, ScrollView
} from 'react-native';

// Swiper
import Swiper from 'react-native-swiper';
// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#FF10F0' barStyle='light-content' />
            <View style={styles.SliderContainer}>
                {/* slider functionality */}
                <Swiper autoplayTimeout={2.5} autoplay horizontal={false} activeDotColor='#FF10F0' height={200}>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/Swiper1.jpeg')}
                            resizeMode='cover' style={styles.ImageSlider} />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/Swiper2.jpeg')}
                            resizeMode='cover' style={styles.ImageSlider} />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/Swiper3.jpeg')}
                            resizeMode='cover' style={styles.ImageSlider} />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/Swiper4.jpeg')}
                            resizeMode='cover' style={styles.ImageSlider} />
                    </View>
                </Swiper>
            </View>
            {/* category listing */}
            <View style={styles.categoryContainer}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Card Details')}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name='ios-restaurant' size={30} color='#fff' />

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons name='food' size={30} color='#fff' />
                        {/* <Text style={styles.categoryBtnTxt}>Food</Text> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons name='food-fork-drink' size={30} color='#fff' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name='ios-restaurant' size={30} color='#fff' />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Ionicons name='md-restaurant' size={30} color='#fff' />
                        {/* <Text style={styles.categoryBtnTxt}>Restaurant</Text> */}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons name='food' size={30} color='#fff' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <MaterialCommunityIcons name='food-fork-drink' size={30} color='#fff' />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                    <View style={styles.categoryIcon}>
                        <Fontisto name='hotel' size={30} color='#fff' />
                    </View>
                </TouchableOpacity>
            </View>
            {/* Card details */}
            <ScrollView style={styles.cardsWrapper}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: '#FF10F0',
                    alignSelf: 'center',
                }}> Recently Viewed </Text>
                {/* First card */}
                <TouchableOpacity onPress={() => navigation.navigate('Card Details')}>
                    <View style={styles.card} >
                        <View style={styles.cardImgWrapper}>
                            <Image source={require('../assets/Swiper1.jpeg')}
                                resizeMode='cover'
                                style={styles.cardImg} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Delicious Meals</Text>
                            <Text style={styles.cardDetails}>Amazing and delicious meals available here.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Second Card */}
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.card} >
                        <View style={styles.cardImgWrapper}>
                            <Image source={require('../assets/Swiper2.jpeg')}
                                resizeMode='cover'
                                style={styles.cardImg} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Delicious Meals</Text>
                            <Text style={styles.cardDetails}>Amazing and delicious meals available here.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Third card */}
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.card} >
                        <View style={styles.cardImgWrapper}>
                            <Image source={require('../assets/Swiper4.jpeg')}
                                resizeMode='cover'
                                style={styles.cardImg} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Delicious Meals</Text>
                            <Text style={styles.cardDetails}>Amazing and delicious meals available here.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Fourth card */}
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.card} >
                        <View style={styles.cardImgWrapper}>
                            <Image source={require('../assets/Swiper3.jpeg')}
                                resizeMode='cover'
                                style={styles.cardImg} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Delicious Meals</Text>
                            <Text style={styles.cardDetails}>Amazing and delicious meals available here.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FF10F0',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
    },
    SliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    slide: {
        borderRadius: 8,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    ImageSlider: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        alignSelf: 'center',
        marginHorizontal: 0,
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#FF10F0',
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 25,
        color: '#FF10F0',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
        color: '#FF10F0',
    },
    cardDetails: {
        fontSize: 12,
        color: '#333',
    },
});