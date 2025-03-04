import { Platform, StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';

export default function MonospacedText({ children }: { children: string }) {
  const { themeFont } = useSettings();

  let output: React.ReactNode = children.split('').map((char, index) =>
    char !== ':' ? (
      <Text key={index} style={[styles.text, styles.monoText, { fontFamily: GlobalStyles.fonts[themeFont] }]}>
        {char}
      </Text>
    ) : (
      <Text key={index} style={[styles.text, styles.monoText, { fontFamily: GlobalStyles.fonts[themeFont], width: 20 }]}>
        {char}
      </Text>
    )
  );

  if (Platform.OS === 'ios' && themeFont === 'mono') {
    output = <Text style={[styles.text, { fontFamily: GlobalStyles.fonts[themeFont], letterSpacing: -4, fontSize: 72 }]}>{children}</Text>;
  }

  return <View style={styles.container}>{output}</View>;
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
