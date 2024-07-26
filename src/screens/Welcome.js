// WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image } from 'react-native';
const logo = require('../assets/images/logoTransparent.png');
import CustomButton from '../componenHome/customButton';
const Welcome = ({ navigation }) => {
  return (    
    <SafeAreaView style={styles.maincontainer}>
    <View style={styles.container}>
      <View style={styles.innercontainer} >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome To</Text>
      <Text style={styles.welcomeText}>Child Shield</Text>
      </View>
      </View>
      <View style={styles.bottomcontainer} >
      <CustomButton onPress={() => navigation.navigate('Login')} title="Login" />
      <CustomButton onPress={() => navigation.navigate('Register')} title="Register" />    
      </View>
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,    
    backgroundColor: '#fff',
  },
  container: {
    flex: 3,    
    justifyContent:'center',
    alignItems:'center'
    },
  innercontainer:{   
    flex: 2,   
    backgroundColor: '#1B83E3',
    alignItems: 'center', 
    borderRadius: 26,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '100%',
    maxHeight:'400',
    height: 400,
    marginBottom: 15,
  },
  logo: {
    marginTop:8,
    width: 215,
    height: 215,
    maxWidth:'100%',
    resizeMode: 'contain',
    
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 30,
  },
  bottomcontainer:{
    flex: 3,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',

  },
 
});

export default Welcome;
