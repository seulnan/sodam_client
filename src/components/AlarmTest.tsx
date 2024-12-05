import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { setAlarm } from '../utils/AlarmUtils';
import { speakMessage } from '../utils/TtsUtils';

const AlarmTest = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>알람 설정 테스트</Text>
      <TouchableOpacity style={styles.button} onPress={setAlarm}>
        <Text style={styles.buttonText}>알람 설정</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={speakMessage}>
        <Text style={styles.buttonText}>음성 송출 테스트</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AlarmTest;
