import { GlobalFontStyles, GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { Pressable, StyleSheet, Text } from 'react-native';

export function TimerSelectButton({ children, onPress, isSelected }: { children: string; onPress: () => void; isSelected: boolean }) {
  const { themeColor, themeFont } = useSettings()!;

  return (
    <Pressable style={[styles.button, isSelected && { backgroundColor: themeColor }]} onPress={onPress}>
      <Text style={[styles.text, isSelected && { color: '#1E213F', opacity: 1 }, GlobalFontStyles[themeFont]]}>{children}</Text>
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
    fontWeight: 'bold',
    opacity: 0.4,
  },
});
