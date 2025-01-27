import RadioItem from './ui/RadioItem';
import RadioGroup from './ui/RadioGroup';
import { GlobalStyles } from '@/constants/GlobalStyles';
import { TColors } from '@/context/SettingsContext';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsFormColorRadioGroup({
  selectedThemeColor,
  setSelectedThemeColor,
}: {
  selectedThemeColor: TColors;
  setSelectedThemeColor: (value: TColors) => void;
}) {
  return (
    <RadioGroup>
      <RadioItem
        onPress={() => setSelectedThemeColor(GlobalStyles.themeColor1)}
        selected={selectedThemeColor === GlobalStyles.themeColor1}
        style={{ backgroundColor: GlobalStyles.themeColor1 }}
        selectedContent={<Ionicons name="checkmark" size={20} />}
      />
      <RadioItem
        onPress={() => setSelectedThemeColor(GlobalStyles.themeColor2)}
        selected={selectedThemeColor === GlobalStyles.themeColor2}
        style={{ backgroundColor: GlobalStyles.themeColor2 }}
        selectedContent={<Ionicons name="checkmark" size={20} />}
      />
      <RadioItem
        onPress={() => setSelectedThemeColor(GlobalStyles.themeColor3)}
        selected={selectedThemeColor === GlobalStyles.themeColor3}
        style={{ backgroundColor: GlobalStyles.themeColor3 }}
        selectedContent={<Ionicons name="checkmark" size={20} />}
      />
    </RadioGroup>
  );
}
