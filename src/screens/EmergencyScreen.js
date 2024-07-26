import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const EmergencyScreen = ({navigation}) => (
  <>
    <Header
      leftIcon={
        <MaterialIcons
          name="chevron-left"
          size={25}
          color={'#000'}
          onPress={() => navigation.goBack()}
        />
      }
      label={'Emergency'}
      rightIcon={
        <MaterialIcons
          name="bell"
          size={19}
          color={'#262929'}
          onPress={() => navigation.navigate('Home')}
        />
      }
    />
    <View style={styles.container}>
      <Text style={styles.text}>Emergency send msg ASAP....</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default EmergencyScreen;
