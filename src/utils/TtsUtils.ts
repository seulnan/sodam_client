import Tts from 'react-native-tts';

// TTS 초기화 함수
export const initializeTTS = () => {
  Tts.getInitStatus()
    .then(() => {
      Tts.setDefaultLanguage('ko-KR'); // 기본 언어 설정
    })
    .catch((error: Error) => {
      console.error('TTS 초기화 오류:', error);
    });
};

// Text-to-Speech(TTS) 음성 송출 함수
export const speakMessage = () => {
  console.log('TTS: speakMessage called');
  try {
    Tts.speak('식사 뭐하셨어요?', {
      iosVoiceId: 'com.apple.ttsbundle.Yuna-compact', // iOS 음성 ID (한국어)
      rate: 0.5, // 말하기 속도 (기본값: 0.5~1.0)
      androidParams: {
        KEY_PARAM_STREAM: 'STREAM_MUSIC', // 오디오 스트림
        KEY_PARAM_VOLUME: 1.0, // 볼륨
        KEY_PARAM_PAN: 0.0, // 스테레오 위치
      },
    });
  } catch (error) {
    console.error('TTS 오류:', error);
  }
};
