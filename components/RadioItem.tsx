import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export default function RadioItem({
  children,
  style,
  selected,
  selectedStyle,
  value,
  onPress,
}: {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  selected?: boolean;
  selectedStyle?: StyleProp<ViewStyle>;
  value?: string;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, style, selected && selectedStyle]}>{children}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000',
  },
});
