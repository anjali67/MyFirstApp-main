import React, {useState} from 'react';
import {
  Alert,  
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
const logo = require('../assets/images/logoTransparent.png');
import CustomButton from '../componenHome/customButton';
import CustomInputText from '../components/TextInput';
const LoginForm = ({ navigation }) => { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container} >
     <View style={styles.innercontainer} >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back</Text>
      <Text style={styles.subtitle}>to Child Shield</Text>
      </View>
      </View>
      <View style={styles.bottomcontainer} >
      <View style={styles.inputView}>
        <CustomInputText         
          placeholder={"Vehicle Number"}
          id={"VehicleNumber"}
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <CustomInputText  
          id={"Password"}        
          placeholder={"Password"}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />     
        <Pressable onPress={() => Alert.alert('Forget Password!')}>
            <Text style={styles.forgetText}>Forgot your Password?</Text>
          </Pressable>      
      </View> 
      </View>
      <View style={styles.rememberView}>
      <CustomButton onPress={() => navigation.navigate('Home')} title="Login" />
      <Pressable onPress={() => Alert.alert('help')}>
            <Text style={styles.footerText}>Help</Text>
          </Pressable>  
      </View>      
    </SafeAreaView>
  );
}

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
    minHeight:'400',
    marginBottom: 15,
  },
  logo: {
    marginTop:8,
    width: 215,
    height: 215,
    maxWidth:'100%',
    resizeMode: 'contain',
    
  },
  title: {
    fontFamily: 'Poppins-SemiBold', 
    fontSize: 25,
    fontWeight: '700', 
    lineHeight: 25,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom:8,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular', 
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 25,
    textAlign: 'center',
    color: '#ffffff',
   
  },
  bottomcontainer:{
    flex:2,
    //justifyContent: 'center',
    alignSelf: 'stretch',
    
  },
  inputView: {
    marginTop:30,
    gap:20,
    alignSelf: 'stretch',   
    //paddingHorizontal:20, 
  },
 
  rememberView: {
    flex: 1.5,
    //justifyContent: 'center',
    alignSelf: 'stretch',   
  },
   forgetText: {
    fontFamily: 'Poppins-Regular', 
    fontWeight: '700', 
    lineHeight: 25,
    fontSize: 11,
    color: '#4383e3', 
    textAlign: 'right',  
    paddingHorizontal: 40, 
  },
 
    footerText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular', 
    fontWeight: '700', 
    lineHeight: 20,
    color: 'gray',
  },
  
});
export default LoginForm;