import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import Timer from '@/components/Timer';
import { type TTimer, useSettings } from '@/context/SettingsContext';
import TimerSelect from '@/components/TimerSelect';
import { useEffect, useRef, useState } from 'react';
import SettingsModal from '@/components/SettingsModal';
import React from 'react';
import { useFonts } from 'expo-font';
import TimerText from '@/components/TimerText';

export default function Index() {
  const { timers } = useSettings()!;

  const [selectedTimer, setSelectedTimer] = useState<TTimer>('pomodoro');
  const [showSettings, setShowSettings] = useState(false);

  const [timeleft, setTimeleft] = useState(timers[selectedTimer] * 60);
  const [isRunning, setIsRunning] = useState(false);

  const startTimeRef = useRef<number | null>(null);
  const elapsedTimeSecondsRef = useRef<number>(0);
  const currentTotaltimeMinutesRef = useRef<number>(timers[selectedTimer]);

  const [loaded, error] = useFonts({
    KumbhSans: require('@/assets/fonts/Kumbh_Sans/static/KumbhSans-Bold.ttf'),
    RobotoSlab: require('@/assets/fonts/Roboto_Slab/static/RobotoSlab-Bold.ttf'),
    SpaceMono: require('@/assets/fonts/Space_Mono/SpaceMono-Regular.ttf'),
  });

  function handleTimerClick() {
    if (!isRunning && timeleft === 0) {
      setTimeleft(timers[selectedTimer] * 60);
      currentTotaltimeMinutesRef.current = timers[selectedTimer];
      elapsedTimeSecondsRef.current = 0;
      // setIsRunning(true);
    } else if (timeleft > 0) {
      setIsRunning(prev => !prev);
    }
  }

  function handleChangeTimer(newTimer: TTimer) {
    const newTimeleft = timers[newTimer] * 60;
    setTimeleft(newTimeleft);
    setIsRunning(false);
    setSelectedTimer(newTimer);

    startTimeRef.current = null;
    currentTotaltimeMinutesRef.current = timers[newTimer];
    elapsedTimeSecondsRef.current = 0;
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTimeSecondsRef.current;

      interval = setInterval(() => {
        if (startTimeRef.current !== null) {
          const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
          const newTimeleft = Math.max(currentTotaltimeMinutesRef.current * 60 - elapsedSeconds, 0);
          setTimeleft(newTimeleft);

          if (newTimeleft === 0) {
            setIsRunning(false);
            if (interval) clearInterval(interval);
          }
        }
      }, 100);
    } else if (!isRunning && startTimeRef.current !== null) {
      elapsedTimeSecondsRef.current = Date.now() - startTimeRef.current;
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

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
            <Timer timeleft={timeleft} timeTotal={currentTotaltimeMinutesRef.current} onPress={handleTimerClick} />
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
