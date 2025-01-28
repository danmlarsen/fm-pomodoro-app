import { GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { StyleSheet, Text } from 'react-native';

export default function SettingsFormCategoryTitle({ children }: { children: string }) {
  const { themeFont } = useSettings()!;

  return <Text style={[styles.titleText, { fontFamily: GlobalStyles.fonts[themeFont] }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    color: '#161932',
    textTransform: 'uppercase',
    letterSpacing: 4.23,
    marginBottom: 16,
  },
});
