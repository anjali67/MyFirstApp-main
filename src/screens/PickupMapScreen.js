import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapComponent from '../mapComponent/mapComponent';
import PickupCard from '../mapComponent/pickupCard';
import BottomBar from '../components/BottomBar';

const PickupMapScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <MapComponent navigation={navigation} />
                <PickupCard
                    name="Harshit Deol"
                    pickupTime="8:00 AM"
                    address="39 Joshi Chawl Bharucha Road Dahisar"

                />
            </View>
            {/* <BottomBar
                activeTab={'Home'}
                navigation={navigation}
                onCardPress={() => { }
                }
            /> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default PickupMapScreen;