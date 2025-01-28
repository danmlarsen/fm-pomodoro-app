import { GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function SettingsFormTimeinput({ label, value, onChange }: { label: string; value: string; onChange: (text: string) => void }) {
  const { themeFont } = useSettings()!;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontFamily: GlobalStyles.fonts[themeFont] }]}>{label}</Text>
      <TextInput
        style={[styles.input, { fontFamily: GlobalStyles.fonts[themeFont] }]}
        value={value}
        onChangeText={onChange}
        inputMode="numeric"
        returnKeyType={'done'}
        maxLength={2}
      />
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
  },
  input: {
    height: 40,
    width: 140,
    fontSize: 14,
    backgroundColor: '#EFF1FA',
    paddingHorizontal: 16,
    borderRadius: 10,
  },
});
