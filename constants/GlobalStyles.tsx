import { StyleSheet } from 'react-native';

export const GlobalStyles = {
  themeColor1: '#F87070',
  themeColor2: '#70F3F8',
  themeColor3: '#D881F8',
};

export const GlobalFontStyles = StyleSheet.create({
  sans: {
    fontFamily: 'KumbhSans',
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
  serif: {
    fontFamily: 'RobotoSlab',
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
  mono: {
    fontFamily: 'SpaceMono',
    fontWeight: 'regular',
  },
});
