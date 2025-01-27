import { StyleSheet, View } from 'react-native';

export default function RadioGroup({ children }: { children: React.ReactNode }) {
  return <View style={styles.radioGroup}>{children}</View>;
}

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
});
