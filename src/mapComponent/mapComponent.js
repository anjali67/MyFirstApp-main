import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/AntDesign';

const MapComponent = (props) => {
    const routeCoordinates = [
        { latitude: 22.3072, longitude: 73.1812 },
    ];

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 22.3072,
                    longitude: 73.1812,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Polyline coordinates={routeCoordinates} strokeColor="#0000FF" strokeWidth={3} />
                <Marker coordinate={{ latitude: 22.3072, longitude: 73.1812 }} />
            </MapView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrowleft" size={24} color={'#262929'} />
                </TouchableOpacity>
                <Text style={styles.title}>Tracking</Text>
                <View />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        justifyContent: "space-between"
    },
    backButton: {
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: "center",
        alignSelf: "center",
        color: "#262929"
    },
});

export default MapComponent;