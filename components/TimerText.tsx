import { GlobalFontStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { StyleSheet, Text, View } from 'react-native';

export default function TimerText({ children }: { children: React.ReactNode }) {
  const { themeFont } = useSettings()!;

  return (
    <View style={styles.timerTextContainer} pointerEvents="none">
      <Text style={[styles.timerText, { fontFamily: GlobalFontStyles[themeFont].fontFamily }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerTextContainer: {
    position: 'absolute',
    bottom: 82,
    left: 0,
    right: 0,
    transform: [{ translateY: '50%' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    color: '#D7E0FF',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 13.13,
  },
});
