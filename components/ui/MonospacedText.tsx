import { GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function MonospacedText({ children }: { children: string }) {
  const { themeFont } = useSettings();

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && themeFont === 'mono' && (
        <Text style={[styles.text, { fontFamily: GlobalStyles.fonts[themeFont], letterSpacing: -4, fontSize: 72 }]}>{children}</Text>
      )}
      {(Platform.OS === 'ios' && themeFont !== 'mono') ||
        (Platform.OS !== 'ios' &&
          children.split('').map((char, index) =>
            char !== ':' ? (
              <Text key={index} style={[styles.text, styles.monoText, { fontFamily: GlobalStyles.fonts[themeFont] }]}>
                {char}
              </Text>
            ) : (
              <Text key={index} style={[styles.text, styles.monoText, { fontFamily: GlobalStyles.fonts[themeFont], width: 20 }]}>
                {char}
              </Text>
            )
          ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: '#D7E0FF',
    fontSize: 80,
  },
  monoText: {
    textAlign: 'center',
    overflow: 'visible',
    width: 45,
  },
});
