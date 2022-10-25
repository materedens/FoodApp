import React from 'react';
import { Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = () => {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/Swiper1.jpg')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/Swiper2.jpeg')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../assets/Swiper3.jpeg')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />

    )
}

export default OnboardingScreen