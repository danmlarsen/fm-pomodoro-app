import { GlobalFontStyles, GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function Button({ children, onPress }: { children: string; onPress: () => void }) {
  const { themeColor, themeFont } = useSettings()!;

  return (
    <Pressable style={[styles.button, { backgroundColor: themeColor }]} onPress={onPress}>
      <Text style={[styles.text, GlobalFontStyles[themeFont]]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 17,
    paddingBottom: 20,
    paddingHorizontal: 47,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    // fontWeight: 'bold',
  },
});
