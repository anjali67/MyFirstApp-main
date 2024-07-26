import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StudentDetailsScreen = ({route}) => {
  const {student} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{student.name}</Text>
      <Text style={styles.detail}>Time: {student.time}</Text>
      <Text style={styles.detail}>Address: {student.address}</Text>
      <Text style={styles.detail}>More details...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detail: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default StudentDetailsScreen;
