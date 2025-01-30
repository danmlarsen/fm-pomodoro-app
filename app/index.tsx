import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import Timer from '@/components/Timer';
import { type TTimer, useSettings } from '@/context/SettingsContext';
import TimerSelect from '@/components/TimerSelect';
import { useEffect, useState } from 'react';
import SettingsModal from '@/components/SettingsModal';
import React from 'react';
import TimerText from '@/components/TimerText';
import { useTimer } from '@/hooks/useTimer';
import useNotifications from '@/hooks/useNotifications';

export default function Index() {
  const { timers } = useSettings();

  const [selectedTimer, setSelectedTimer] = useState<TTimer>('pomodoro');
  const [showSettings, setShowSettings] = useState(false);

  const { timeleft, isRunning, setIsRunning, resetTimer } = useTimer(timers[selectedTimer]);
  const { playNotificationSound } = useNotifications();

  useEffect(() => {
    if (!isRunning && timeleft === 0) {
      playNotificationSound();
    }
  }, [timeleft, isRunning]);

  function handleTimerClick() {
    if (!isRunning && timeleft === 0) {
      resetTimer(timers[selectedTimer]);
    } else if (timeleft > 0) {
      setIsRunning(prev => !prev);
    }
  }

  function handleChangeTimer(newTimer: TTimer) {
    setSelectedTimer(newTimer);

    setIsRunning(false);
    resetTimer(timers[newTimer]);
  }
  return (
    <>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('@/assets/images/logo.svg')} style={styles.logo} />
          </View>
          <TimerSelect selectedTimer={selectedTimer} setSelectedTimer={handleChangeTimer} />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.timerContainer}>
            <Timer timeleft={timeleft} timeTotal={timers[selectedTimer]} onPress={handleTimerClick} />
            <TimerText>
              <>
                {!isRunning && timeleft > 0 ? 'Pause' : ''}
                {!isRunning && timeleft === 0 ? 'Restart' : ''}
              </>
            </TimerText>
          </View>
        </View>

        <View>
          <Pressable onPress={() => setShowSettings(prev => !prev)}>
            <Image source={require('@/assets/images/icon-settings.svg')} style={styles.settingsImage} />
          </Pressable>
        </View>
      </SafeAreaView>
      <SettingsModal isVisible={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#1E213F',
    paddingTop: 32,
    paddingBottom: 48,
    alignItems: 'center',
  },
  headerContainer: {
    gap: 45,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 117,
    height: 24,
  },
  logoContainer: {
    alignItems: 'center',
  },
  timerContainer: {
    position: 'relative',
  },
  settingsImage: {
    width: 28,
    height: 28,
  },
});
