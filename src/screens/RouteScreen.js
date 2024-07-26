import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import StudentCard from './StudentCard';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    id: '1',
    name: 'Sam Patel',
    time: '7:30 am',
    address: '39 Joshi Chawl Bharucha Road Dahisar',
    image: 'https://example.com/sam-patel.jpg',
  },
  {
    id: '2',
    name: 'Sahana Heer',
    time: '7:50 am',
    address: 'Block A 45, Vilas Nagar, Borivali',
    image: 'https://example.com/sam-patel.jpg',
  },
];

const RouteScreen = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('PickUp');

  const handlePress = item => {
    // Handle the press event, e.g., navigate to the student details screen
    navigation.navigate('StudentDetails', {student: item});
  };

  return (
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
        label={'Route'}
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
        <View style={styles.header}>
          <Text style={styles.date}>02 July 2024</Text>
          <Text style={styles.schoolName}>School Name</Text>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'PickUp' && styles.activeTab]}
            onPress={() => setSelectedTab('PickUp')}>
            <Text>Pick Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Drop' && styles.activeTab]}
            onPress={() => setSelectedTab('Drop')}>
            <Text>Drop</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <View style={styles.listContainer}>
              <StudentCard item={item} onPress={() => handlePress(item)} />
            </View>
          )}
          contentContainerStyle={styles.listContentContainer}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B83E3',
    borderRadius: 26,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    color: '#000',
  },
  schoolName: {
    fontSize: 16,
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  tab: {
    padding: 16,
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    color: '#499CE9',
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    lineHeight: 25,
    fontSize: 16,
  },
  activeTab: {
    backgroundColor: '#499CE9',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontWeight: '700',
    lineHeight: 25,
    fontSize: 16,
  },
  listContentContainer: {
    paddingVertical: 8,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
});

export default RouteScreen;
