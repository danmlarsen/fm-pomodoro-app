import { Text } from 'react-native';

import RadioItem from './ui/RadioItem';
import RadioGroup from './ui/RadioGroup';
import { GlobalStyles } from '@/constants/GlobalStyles';
import { TFonts } from '@/context/SettingsContext';

export default function SettingsFormFontRadioGroup({
  selectedThemeFont,
  setSelectedThemeFont,
}: {
  selectedThemeFont: TFonts;
  setSelectedThemeFont: (value: TFonts) => void;
}) {
  return (
    <RadioGroup>
      <RadioItem
        onPress={() => setSelectedThemeFont('sans')}
        selected={selectedThemeFont === 'sans'}
        style={{ backgroundColor: '#EFF1FA' }}
        selectedStyle={{ backgroundColor: '#161932' }}
      >
        <Text style={[{ fontFamily: GlobalStyles.fonts['sans'] }, selectedThemeFont === 'sans' && { color: 'white' }]}>Aa</Text>
      </RadioItem>
      <RadioItem
        onPress={() => setSelectedThemeFont('serif')}
        selected={selectedThemeFont === 'serif'}
        style={{ backgroundColor: '#EFF1FA' }}
        selectedStyle={{ backgroundColor: '#161932' }}
      >
        <Text style={[{ fontFamily: GlobalStyles.fonts['serif'] }, selectedThemeFont === 'serif' && { color: 'white' }]}>Aa</Text>
      </RadioItem>
      <RadioItem
        onPress={() => setSelectedThemeFont('mono')}
        selected={selectedThemeFont === 'mono'}
        style={{ backgroundColor: '#EFF1FA' }}
        selectedStyle={{ backgroundColor: '#161932' }}
      >
        <Text style={[{ fontFamily: GlobalStyles.fonts['mono'] }, selectedThemeFont === 'mono' && { color: 'white' }]}>Aa</Text>
      </RadioItem>
    </RadioGroup>
  );
}
