import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwipeButton from 'rn-swipe-button';

const SwipeButtonExample = ({ title }) => {
    const handleOnSwipeSuccess = () => {
        alert('Swiped successfully!');
    };

    return (
        <View style={styles.container}>
            <SwipeButton
                swipeSuccessThreshold={70}
                onSwipeSuccess={handleOnSwipeSuccess} // Ensure to call the function here
                railFillColor="#ccc"

                thumbIconBackgroundColor="#fff" // White color
                title={title}
                titleColor="#fff" // Optional: Change text color to black for better contrast with white swiper
                railBorderColor="transparent" // Remove border color
                railBorderWidth={0} // Remove border width
                thumbIconWidth={50} // Adjust size if needed
                thumbIconHeight={50} // Adjust size if needed
                thumbIconBorderRadius={25} // Make it circular (half of width/height)
                thumbIconImageSource={require('../assets/images/alreticon.png')}
                titleFontSize={16} // Adjust text font size
                containerStyles={styles.swipeButtonContainer}
                railBackgroundColor="#318FE6"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    swipeButtonContainer: {
        width: 320,
        height: 50,
        paddingVertical: 10, // Add space on the top and bottom
        borderRadius: 22, // Rounded corners for the container, adjust if needed
        marginRight: 10,
        paddingHorizontal: 4
    },
});

export default SwipeButtonExample;
