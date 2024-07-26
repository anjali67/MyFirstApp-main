import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInputText from '../components/TextInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import DropdownInput from '../otherComponents/DropdownInput';
import Entypo from 'react-native-vector-icons/Entypo'
import CustomButton from '../componenHome/customButton';

const StudentShuffleScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [vanNumber, setVanNumber] = useState('');
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [reason, setReason] = useState('');
  const [image, setImage] = useState('')
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');


  const formatDate = (date) => {
    const day = date.getDate();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  const dateValue = formatDate(date);

  const handleDateInput = (text) => {
    const enteredDate = new Date(text);
    if (!isNaN(enteredDate.getTime())) {
      setDate(enteredDate);
    }
  };

  const handleDateTimePicker = () => {
    setShowDateTimePicker(true);
  };

  const handleDatePicked = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDateTimePicker(false);
  };

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          headerContainerStyle={styles.headerContainerStyle}
          leftIcon={
            <AntDesign
              name="arrowleft"
              size={25}
              color={'#000'}
              onPress={() => navigation.goBack()}
            />
          }
          label={'Student Shuffle'}
          rightIcon={
            <Feather
              name="bell"
              size={19}
              color={'#262929'}
              onPress={() => { }}
            />
          }
        />
        <View style={styles.blankView} />
        <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false} >
          <TouchableOpacity onPress={() => handleDateTimePicker()}>
            <CustomInputText
              value={dateValue}
              containerStyle={styles.containerStyle}
              placeholder={'Date'}
              id={'Date'}
              onChangeText={handleDateInput}
              rightIcon={
                <Feather
                  name="calendar"
                  size={20}
                  color={'black'}
                />
              }
            />
            {showDateTimePicker && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="default"
                onChange={handleDatePicked}
              />
            )}
          </TouchableOpacity>
          <DropdownInput />
          <CustomInputText
            containerStyle={styles.containerStyle}
            placeholder={'van Number'}
            id={'vanNumber'}
            onChangeText={(text) => setVanNumber(text)}
            keyboardType={'numeric'}
          />
          <CustomInputText
            containerStyle={styles.containerStyle}
            placeholder={'Name'}
            id={'name'}
            onChangeText={(text) => setName(text)}
          />
          <CustomInputText
            containerStyle={styles.containerStyle}
            placeholder={'Contact No.'}
            id={'contactNumber'}
            onChangeText={(text) => setContactNumber(text)}
            keyboardType={'numeric'}
          />
          <CustomInputText
            containerStyle={styles.containerStyle}
            placeholder={'Address'}
            id={'address'}
            onChangeText={(text) => setAddress(text)}
          />
          {image ? <View style={styles.imageView}>
            <View>
              <Image source={{ uri: image }} style={styles.imageStyle} />
              <TouchableOpacity onPress={() => setImage('')} style={styles.crossView}>
                <Entypo
                  name="circle-with-cross"
                  size={24}

                />
              </TouchableOpacity>
            </View>

          </View> : <TouchableOpacity onPress={openGallery}>
            <CustomInputText
              containerStyle={styles.containerStyle}
              placeholder={'Upload Photo'}
              id={'photo'}
              onChangeText={(text) => setImage(text)}
              rightIcon={
                <Feather
                  name="image"
                  size={23}
                />
              }
            />
          </TouchableOpacity>}
          <CustomInputText
            inputWrapperStyle={styles.inputWrapperStyle}
            containerStyle={styles.containerStyle}
            placeholder={'Reason of Shuffle'}
            id={'reason'}
            onChangeText={(text) => setReason(text)}
            multiline={true}
          />
        </ScrollView>
        <CustomButton customStyle={styles.customStyle} onPress={() => navigation.navigate('')} title="Confirm Shuffle" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerContainerStyle: {
    backgroundColor: '#fff',
  },
  containerStyle: {
    width: '95%',
    marginBottom: 5,
  },
  blankView: {
    height: '3%',
  },
  inputWrapperStyle: {
    height: 100,
    paddingBottom: 30,
  },
  imageStyle: {
    width: 60, height: 60, borderRadius: 8,
  },
  imageView: {
    paddingBottom: 16,
    alignSelf: "flex-start",
    paddingHorizontal: 10
  },
  crossView: {
    position: "absolute", alignSelf: "flex-end", margin: -9, right: 2
  },
  customStyle: {
    marginHorizontal: 20,
  },
  contentContainerStyle: {
    paddingBottom: 20
  }


});

export default StudentShuffleScreen;
