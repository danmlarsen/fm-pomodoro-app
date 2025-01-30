import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({
  icon,
  size,
  color,
  style,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View style={style}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}
