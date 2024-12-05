import Tts from 'react-native-tts';

// Text-to-Speech(TTS) 음성 송출 함수
export const speakMessage = () => {
  Tts.setDefaultLanguage('ko-KR');
  Tts.speak('식사 뭐하셨어요?');
};
