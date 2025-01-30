import { GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { StyleSheet, Text, View } from 'react-native';

export default function MonospacedText({ children }: { children: string }) {
  const { themeFont } = useSettings();

  return (
    <View style={styles.container}>
      {children.split('').map((char, index) =>
        char !== ':' ? (
          <Text key={index} style={[styles.text, { fontFamily: GlobalStyles.fonts[themeFont] }]}>
            {char}
          </Text>
        ) : (
          <Text key={index} style={[styles.text, { fontFamily: GlobalStyles.fonts[themeFont], width: 20 }]}>
            {char}
          </Text>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: '#D7E0FF',
    width: 45,
    fontSize: 80,
    textAlign: 'center',
    overflow: 'visible',
  },
});
