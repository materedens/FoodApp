import React from 'react';
import StarRating from 'react-native-star-rating';
// import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomStarRating = () => {
    return (
        <StarRating
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={7}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            fullStarColor={'red'}
        />
    )
}

export default CustomStarRating;