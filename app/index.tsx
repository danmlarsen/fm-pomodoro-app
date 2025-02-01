import React, { useEffect, useState } from 'react';
import { Linking, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import * as Haptics from 'expo-haptics';

import { useTimer } from '@/hooks/useTimer';
import useNotifications from '@/hooks/useNotifications';
import { type TTimer, useSettings } from '@/context/SettingsContext';
import SettingsModal from '@/components/SettingsModal';
import Timer from '@/components/Timer';
import TimerSelect from '@/components/TimerSelect';
import TimerText from '@/components/TimerText';
import Button from '@/components/ui/Button';

export default function Index() {
  const { timers } = useSettings();

  const [selectedTimer, setSelectedTimer] = useState<TTimer>('pomodoro');
  const [showSettings, setShowSettings] = useState(false);

  const { timeleft, isRunning, setIsRunning, resetTimer, startTime, totalTime } = useTimer(timers[selectedTimer]);
  const { playNotificationSound } = useNotifications();

  // Notify the user with sound & haptics when timer has run out
  useEffect(() => {
    if (!isRunning && timeleft === 0) {
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }

      playNotificationSound();
    }
  }, [timeleft, isRunning]);

  // Change total duration of timer if timer has not been started yet and total duration is changed
  useEffect(() => {
    if (!isRunning && !startTime) {
      resetTimer(timers[selectedTimer]);
    }
  }, [timers, startTime, isRunning]);

  function handleTimerClick() {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

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

        {Platform.OS === 'web' && (
          <View style={{ marginTop: 32, alignItems: 'center', zIndex: 100, backgroundColor: '#161932', padding: 32, borderRadius: 16 }}>
            <Text style={{ color: '#D7E0FF', fontSize: 32, textAlign: 'center', fontWeight: 'bold', marginBottom: 16 }}>This app is intended for mobile</Text>
            <Button
              onPress={async () => {
                const githubUrl = 'https://github.com/danmlarsen/fm-pomodoro-app/releases';
                await Linking.openURL(githubUrl);
              }}
            >
              Download .apk
            </Button>
          </View>
        )}

        <View style={styles.contentContainer}>
          <View style={styles.timerContainer}>
            <Timer timeleft={timeleft} timeTotal={totalTime} onPress={handleTimerClick} />
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
