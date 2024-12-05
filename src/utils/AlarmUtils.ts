import RNAlarmClock from 'react-native-alarm-clock';

// 알람 설정 함수
export const setAlarm = () => {
    const now = new Date();
    const alarmTime = new Date(now.getTime() + 1 * 60 * 1000); // 현재 시간 + 1분 (테스트용)

    RNAlarmClock.createAlarm(
        '식사알림', 
    `식사 알림: ${alarmTime.getHours()}시 ${alarmTime.getMinutes()}분`
    )
};
