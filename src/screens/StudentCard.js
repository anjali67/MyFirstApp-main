import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
const StudentImgae = require('../assets/images/StudentImage.png');
const styles = StyleSheet.create({
  card: {
    // flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    //flex: 1,
  },
  callButton: {
    padding: 10,
  },
  info: {
    // flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  details: {
    alignItems: 'center',
    marginTop: 8,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 16,
  },
  subText: {
    fontSize: 14,
    color: '#888',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
});

const StudentCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={{ flexDirection: 'row' }}>
      <FastImage
        style={styles.image}
        source={require('../assets/images/StudentImage.png')}
      />
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity style={styles.callButton}>
        <Icon name="phone" size={25} color="#1B83E3" />
      </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', margin: 10 }}>
      <View style={{ padding: 5 }}>
        <View style={styles.addressContainer}>
          <Icon name="clock-o" size={20} color="#000" />
          <Text style={styles.detailText}>{item.time}</Text>
          <Text style={styles.subText}>Pick Up</Text>
        </View>

        <View style={styles.addressContainer}>
          <Icon name="map-marker" size={20} color="#000" />
          <Text style={styles.detailText}>{item.address}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default StudentCard;
