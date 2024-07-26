import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ClockIcon } from '../assets/icons/clock';
import SwipeButtonComponent from './slideButton'; // Import your swipe button component
import { DirectionIcon } from '../assets/icons/direction';

const PickupCard = ({ name, pickupTime, address }) => {
    const [showSwipeButton, setShowSwipeButton] = useState(null); // Track which swipe button to show

    const handlePickUpClick = () => {
        setShowSwipeButton('pickUp'); // Show swipe button for Pick-Up
    };

    const handleAbsentClick = () => {
        setShowSwipeButton('absent'); // Show swipe button for Absent
    };

    const renderButtons = () => {
        return (
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={handlePickUpClick}>
                    <Text style={styles.buttonText}>Pick-Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#E1441F" }]} onPress={handleAbsentClick}>
                    <Text style={styles.buttonText}>Absent</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const renderSwipeButton = () => {
        if (showSwipeButton === 'pickUp') {
            return <SwipeButtonComponent title={'Slide to Confirm Pick-Up'} />;
        } else if (showSwipeButton === 'absent') {
            return <SwipeButtonComponent title={'Slide to Confirm Absent'} />;
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.innerView}>
                <View style={[styles.innerContainer, { backgroundColor: '#053153' }]}>
                    <FastImage source={require('../assets/images/Route.png')} style={styles.image} />
                    <Text style={styles.textStyle}>VAN</Text>
                </View>
                <View style={styles.innerContainer}>
                    <DirectionIcon />
                </View>
            </View>
            <View style={{ backgroundColor: '#1B83E3', paddingVertical: 20, borderRadius: 5, paddingHorizontal: 10 }}>
                <Text style={styles.title}>Next Pickup</Text>
                <View style={styles.userInfo}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row" }}>
                            <FastImage source={require('../assets/images/StudentImage.png')} style={styles.photo} />
                            <Text style={styles.name}>{name}</Text>
                        </View>
                        <View style={styles.phoneContainer}>
                            <FontAwesome5 name="phone-alt" color="#4383e3" size={14} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <View style={[styles.addressContainer, { width: '40%' }]}>
                            <ClockIcon />
                            <View>
                                <Text style={styles.subText}>Pick Up</Text>
                                <Text style={styles.detailText}>{pickupTime}</Text>
                            </View>
                        </View>
                        <View style={[styles.addressContainer]}>
                            <Icon name="map-marker" size={20} color="#000" />
                            <View style={{ marginHorizontal: 1 }}>
                                <Text style={styles.subText}>Pick At</Text>
                                <Text style={[styles.detailText, { width: 160, fontSize: 13 }]}>{address}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {showSwipeButton === null ? renderButtons() : renderSwipeButton()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 15,
        width: 23,
        resizeMode: "contain",
    },
    textStyle: {
        color: '#fff',
        fontSize: 11,
        bottom: 1
    },
    card: {
        padding: 20,
        position: 'absolute',
        bottom: 10,
        left: 5,
        right: 5,
    },
    innerView: {
        flexDirection: "row", justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 10
    },
    innerContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1B83E3",
        borderRadius: 6,
        marginLeft: 15,
        elevation: 5,
        height: 40,
        width: 40
    },
    title: {
        color: '#FFFFFF',
        fontSize: 13,
        marginBottom: 10,
        textTransform: "uppercase",
        fontWeight: "700"
    },
    userInfo: {
        borderRadius: 6,
        backgroundColor: "#FFFFFF",
        padding: 10,
        paddingHorizontal: 15,
        marginTop: 8
    },
    phoneContainer: {
        backgroundColor: "#F6F7F9",
        padding: 8,
        borderRadius: 8
    },
    photo: {
        width: 36,
        height: 36,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        textAlign: "center",
        alignSelf: "center",
        color: "#262929"
    },
    pickupTime: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    address: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#33BE1C',
        padding: 15,
        borderRadius: 30,
        width: '48%',
        height: 56,
        justifyContent: "center",
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: "600"
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    detailText: {
        marginLeft: 8,
        fontSize: 15,
        fontWeight: "600",
        color: "#000000"
    },
    subText: {
        fontSize: 12,
        color: '#000000',
        fontWeight: "500",
        marginHorizontal: 8
    },
    detailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
});

export default PickupCard;
