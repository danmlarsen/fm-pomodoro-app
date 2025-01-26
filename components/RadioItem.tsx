import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

export default function RadioItem({
  style,
  selected,
  selectedStyle,
  selectedContent,
  children,
  onPress,
}: {
  style?: StyleProp<ViewStyle>;
  selected?: boolean;
  selectedStyle?: StyleProp<ViewStyle>;
  selectedContent?: React.ReactNode;
  children?: React.ReactNode;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, style, selected && selectedStyle]}>{!children ? selected && selectedContent : children}</View>
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
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1E213F',
  },
});
