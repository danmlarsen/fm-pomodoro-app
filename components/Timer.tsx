import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Timer({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.clockContainer}>
      <LinearGradient style={styles.clock} colors={['#0E112A', '#2E325A']}>
        <Pressable style={styles.clockButton} onPress={onPress}>
          <View style={styles.clockInnerContainer}>
            <Text style={styles.text}>17:59</Text>
          </View>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  clockContainer: {
    alignItems: 'center',
  },
  clock: {
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '-50px, -50px 100px 0 #272C5A',
  },
  clockButton: {
    width: '100%',
    height: '100%',
    padding: 16,
    borderRadius: 150,
  },
  clockInnerContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
    borderRadius: 134,
    backgroundColor: '#161932',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#D7E0FF',
    fontSize: 80,
    fontWeight: 'bold',
  },
});
