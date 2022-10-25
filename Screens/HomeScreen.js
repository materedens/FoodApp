import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

// Swiper
import Swiper from 'react-native-swiper';

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
});