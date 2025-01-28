import { GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { Pressable, StyleSheet, Text } from 'react-native';

export function TimerSelectButton({ children, onPress, isSelected }: { children: string; onPress: () => void; isSelected: boolean }) {
  const { themeColor, themeFont } = useSettings()!;

  return (
    <Pressable style={[styles.button, isSelected && { backgroundColor: themeColor }]} onPress={onPress}>
      <Text style={[styles.text, { fontFamily: GlobalStyles.fonts[themeFont] }, isSelected && { color: '#1E213F', opacity: 1 }]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26.5,
  },
  text: {
    fontSize: 12,
    color: '#D7E0FF',
    opacity: 0.4,
  },
});
