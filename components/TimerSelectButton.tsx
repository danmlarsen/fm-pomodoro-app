import { Pressable, StyleSheet, Text } from 'react-native';

export function TimerSelectButton({ children, onPress, isSelected }: { children: string; onPress: () => void; isSelected: boolean }) {
  return (
    <Pressable style={[styles.button, isSelected && { backgroundColor: '#F87070' }]} onPress={onPress}>
      <Text style={[styles.text, isSelected && { color: '#1E213F' }]}>{children}</Text>
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
    color: '#D7E0FF',
    fontWeight: 'bold',
  },
});
