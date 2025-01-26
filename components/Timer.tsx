import { GlobalFontStyles, GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default function Timer({ timeleft, timeTotal, onPress }: { timeleft: number; timeTotal: number; onPress: () => void }) {
  const { themeFont, themeColor } = useSettings()!;

  const fill = (timeleft / (timeTotal * 60)) * 100;

  return (
    <Pressable style={styles.clockContainer} onPress={onPress}>
      <LinearGradient style={styles.clock} colors={['#0E112A', '#2E325A']}>
        <View style={styles.clockInnerContainer}>
          <AnimatedCircularProgress size={248} width={8} tintColor={themeColor} fill={fill} rotation={0} lineCap="round" prefill={100}>
            {() => (
              <Text
                style={[
                  styles.text,
                  GlobalFontStyles[themeFont],
                  themeFont === 'sans' && { letterSpacing: -4 },
                  themeFont === 'mono' && { letterSpacing: -10 },
                ]}
              >
                {formatTime(timeleft)}
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  clockContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  clock: {
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '-50px, -50px 100px 0 #272C5A',
  },
  clockInnerContainer: {
    width: 268,
    height: 268,
    borderRadius: 134,
    backgroundColor: '#161932',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#D7E0FF',
    fontSize: 80,
  },
});
