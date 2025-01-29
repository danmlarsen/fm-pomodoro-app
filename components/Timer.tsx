import { useSettings } from '@/context/SettingsContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Easing, Pressable, StyleSheet, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import MonospacedText from './ui/MonospacedText';

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default function Timer({ timeleft, timeTotal, onPress }: { timeleft: number; timeTotal: number; onPress: () => void }) {
  const { themeColor } = useSettings()!;

  const fill = (timeleft / (timeTotal * 60)) * 100;

  return (
    <Pressable
      style={({ pressed }) => [styles.clockButton, pressed && { opacity: 0.75 }]}
      onPress={onPress}
      android_ripple={{ color: '#272C5A', foreground: true, radius: 150 }}
    >
      <View style={styles.clockSecondaryShadow}>
        <LinearGradient style={styles.clock} colors={['#0E112A', '#2E325A']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <View style={styles.clockInnerContainer}>
            <AnimatedCircularProgress
              size={248}
              width={8}
              tintColor={themeColor}
              fill={fill}
              rotation={0}
              lineCap="round"
              prefill={100}
              duration={1000}
              easing={Easing.linear}
            >
              {() => <MonospacedText>{formatTime(timeleft)}</MonospacedText>}
            </AnimatedCircularProgress>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  clockButton: {
    width: 300,
    height: 300,
    borderRadius: 150,
    boxShadow: '-50 -50 100 0 #272C5A',
  },
  clockSecondaryShadow: {
    boxShadow: '50 50 100 0 #121530',
    borderRadius: 150,
  },
  clock: {
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockInnerContainer: {
    width: 268,
    height: 268,
    borderRadius: 134,
    backgroundColor: '#161932',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // text: {
  //   color: '#D7E0FF',
  //   fontSize: 80,
  //   fontVariant: ['tabular-nums'],
  // },
});
