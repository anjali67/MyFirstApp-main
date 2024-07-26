import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../componenHome/customButton';
import FastImage from 'react-native-fast-image';
const RegisterSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.welcomeText}>Register</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <FastImage
          style={styles.iconimage}
          source={require('../assets/images/rightRigster.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.subtitle}>Account Registered </Text>
        <Text style={styles.subtitleSmall}>
          Login Password is Sent to Your WhatsApp No.{' '}
        </Text>
      </View>
      <View style={styles.bottomcontainer}>
        <CustomButton
          onPress={() => navigation.navigate('Login')}
          title="Login"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconimage: {
    resizeMode: 'cover',
    width: 228,
    height: 228,
    alignSelf: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 37.5,
    textAlign: 'center',
    color: '#626262',
    marginTop: 10,
  },
  subtitleSmall: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22.5,
    textAlign: 'center',
    color: '#626262',
    marginTop: 10,
    margin: 55,
  },
  innercontainer: {
    //flex:1,
    height: 130,
    backgroundColor: '#1B83E3',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    borderRadius: 26,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '100%',
  },
  fieldcontainer: {
    flex: 2.5,
    justifyContent: 'center',
  },
  bottomcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  welcomeText: {
    fontFamily: 'Poppins-SemiBold', // Ensure this matches the font file name
    fontSize: 25,
    fontWeight: '600', // Font weight is often inferred from the font file
    lineHeight: 37.5,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 10,
  },
});

export default RegisterSuccess;
