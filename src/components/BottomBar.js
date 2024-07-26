import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native';
import { fetchPost } from '../services/apiService';
import { useSelector } from 'react-redux';
import { GETMESSAGECOUNT } from '../globals';
import { useFocusEffect } from '@react-navigation/native';
import { HomeIcon } from '../assets/icons/home';
import { MapIcon } from '../assets/icons/map';
import { CalenderIcon } from '../assets/icons/calender';
import { PersonIcon } from '../assets/icons/person';

const BottomBar = ({ navigation, activeTab, onCardPress }) => {
  const isHomeActive = activeTab === 'Home';
  const isCalendarActive = activeTab === 'Calendar';
  const isECardActive = activeTab === 'ECard';
  const isMessageCenterActive = activeTab === 'MessageCenter';

  // const user = useSelector(state => state.user.value);
  const user = ''
  const [state, setState] = useState({
    isLoading: true,
    eventMessageCount: '',
  });

  useFocusEffect(
    React.useCallback(() => {
      fetchCount();
    }, []),
  );

  async function fetchCount() {
    setState(prevState => ({ ...prevState, isLoading: true }));
    try {
      const response = await fetchPost(
        GETMESSAGECOUNT,
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + user.token,
        },
        {
          user_id: user.id,
          tenant_id: user.tenant_id,
        },
      );
      if (response) {
        setState(prevState => ({
          ...prevState,
          eventMessageCount: response.counts,
          isLoading: false,
        }));
      } else {
        setState(prevState => ({ ...prevState, isLoading: false }));
        // toast.show('No Users Found !', {
        //   type: 'warning',
        // });
      }
    } catch (error) {
      setState(prevState => ({ ...prevState, isLoading: false }));
      // toast.show('No Users Found !!!', {
      //   type: 'warning',
      // });
    }
  }

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        style={[styles.tabButton, isHomeActive && styles.activeTab]}
        onPress={() => navigation.navigate('Dashboard')}>
        <HomeIcon color={isHomeActive && '#1B83E3'} />

      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, isCalendarActive && styles.activeTab]}
        onPress={() => navigation.navigate('Calendar')}>
        <MapIcon color={isCalendarActive && '#1B83E3'} />

      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, isECardActive && styles.activeTab]}
        onPress={onCardPress}>
        <CalenderIcon color={isCalendarActive && '#1B83E3'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tabButton, isMessageCenterActive && styles.activeTab]}
        onPress={() => navigation.navigate('MessageCenter')}>
        <PersonIcon color={isMessageCenterActive && '#1B83E3'} />
        {state.eventMessageCount != null && (
          <Text
            style={[isMessageCenterActive ? styles.activecount : styles.count]}>
            {state.eventMessageCount}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 75 : 50,
    paddingBottom: Platform.OS === 'ios' ? 25 : 0,
    elevation: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  tabText: {
    fontSize: 12,
    color: '#fff',
    width: 100,
    textAlign: 'center',
    fontFamily: 'Outfit-Regular',
  },
  activeTab: {
    //  backgroundColor: '#037CC3',
    borderRadius: 50,
  },
  activeTabExtended: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 5,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: -12,
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: '#d6d6d6',
  },
  count: {
    position: 'absolute',
    top: '2%',
    right: '25%',
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 50,
  },
  activecount: {
    position: 'absolute',
    top: '-20%',
    right: '25%',
    color: '#fff',
    backgroundColor: '#000',
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 50,
  },
});
export default BottomBar;
