import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const StudentEntryScreen = ({navigation}) => (
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
      label={'Student Entry'}
      rightIcon={
        <MaterialIcons
          name="bell"
          size={19}
          color={'#262929'}
          onPress={() => navigation.navigate('Register')}
        />
      }
    />
    <View style={styles.container}>
      <Text style={styles.text}>Student Entry coming soon....</Text>
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

export default StudentEntryScreen;
