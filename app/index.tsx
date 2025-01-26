import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import Timer from '@/components/Timer';
import { type TTimer, useSettings } from '@/context/SettingsContext';
import TimerSelect from '@/components/TimerSelect';
import { useEffect, useState } from 'react';
import SettingsModal from '@/components/SettingsModal';
import React from 'react';
import { useFonts } from 'expo-font';

export default function Index() {
  const { timers } = useSettings()!;

  const [selectedTimer, setSelectedTimer] = useState<TTimer>('pomodoro');
  const [timeleft, setTimeleft] = useState(timers[selectedTimer] * 60);
  const [isActive, setIsActive] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [loaded, error] = useFonts({
    KumbhSans: require('@/assets/fonts/Kumbh_Sans/static/KumbhSans-Bold.ttf'),
    RobotoSlab: require('@/assets/fonts/Roboto_Slab/static/RobotoSlab-Bold.ttf'),
    SpaceMono: require('@/assets/fonts/Space_Mono/SpaceMono-Regular.ttf'),
  });

  function handleTimerClick() {
    if (!isActive && timeleft === 0) {
      setTimeleft(timers[selectedTimer] * 60);
      setIsActive(true);
    } else if (timeleft > 0) {
      setIsActive(prev => !prev);
    }
  }

  function handleChangeTimer(newTimer: TTimer) {
    const newTimeleft = timers[newTimer] * 60;
    setTimeleft(newTimeleft);

    setIsActive(false);
    setSelectedTimer(newTimer);
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isActive && !interval) {
      interval = setInterval(() => {
        setTimeleft(prev => prev - 1);
      }, 1000);
    } else if (!isActive && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive]);

  useEffect(() => {
    if (timeleft <= 0) {
      setIsActive(false);
    }
  }, [timeleft]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('@/assets/images/logo.svg')} style={styles.logo} />
        </View>
        <View style={styles.timerSelectContainer}>
          <TimerSelect selectedTimer={selectedTimer} setSelectedTimer={handleChangeTimer} />
        </View>
        <View style={styles.timerContainer}>
          <Timer timeleft={timeleft} timeTotal={timers[selectedTimer]} onPress={handleTimerClick} />
        </View>
        <View style={styles.settingsContainer}>
          <Pressable onPress={() => setShowSettings(prev => !prev)}>
            <Image source={require('@/assets/images/icon-settings.svg')} style={styles.settingsImage} />
          </Pressable>
        </View>
      </View>
      <SettingsModal isVisible={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E213F',
    paddingTop: 32,
    paddingBottom: 48,
    alignItems: 'center',
  },
  logo: {
    width: 117,
    height: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 45,
  },
  timerSelectContainer: {
    marginBottom: 48,
  },
  timerContainer: {
    marginBottom: 80,
  },
  settingsContainer: {
    alignItems: 'center',
  },
  settingsImage: {
    width: 28,
    height: 28,
  },
});
