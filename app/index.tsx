import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import Timer from '@/components/Timer';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/logo.svg')} style={styles.logo} />
      </View>
      <View style={styles.timerContainer}>
        <Timer onPress={() => alert('Pressed')} />
      </View>
      <View style={styles.settingsContainer}>
        <Image source={require('@/assets/images/icon-settings.svg')} style={styles.settingsImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E213F',
    paddingTop: 80,
  },
  logo: {
    width: 117,
    height: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 109,
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
