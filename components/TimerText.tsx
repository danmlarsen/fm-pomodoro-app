import { StyleSheet, Text, View } from 'react-native';

export default function TimerText({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.timerTextContainer} pointerEvents="none">
      <Text style={styles.timerText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerTextContainer: {
    position: 'absolute',
    bottom: 82,
    left: 0,
    right: 0,
    // transform: [{ translateX: '-50%' }],
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
