import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { initializeTTS } from './src/utils/TtsUtils'; 
import AlarmTest from './src/components/AlarmTest';

const App = () => {
   useEffect(() => {
     initializeTTS(); // 앱 시작 시 TTS 초기화
   }, []);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AlarmTest />
    </SafeAreaView>
  );
};

export default App;
