import { GlobalFontStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function SettingsFormTimeinput({ label, value, onChange }: { label: string; value: string; onChange: (text: string) => void }) {
  const { themeFont } = useSettings()!;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, GlobalFontStyles[themeFont]]}>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={onChange} inputMode="numeric" returnKeyType={'done'} maxLength={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#1E213F',
    fontSize: 12,
    opacity: 0.4,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 140,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#EFF1FA',
    paddingHorizontal: 16,
    borderRadius: 10,
  },
});
