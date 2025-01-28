import { Modal, StyleSheet, Text, View } from 'react-native';
import SettingsForm from './SettingsForm';
import IconButton from './ui/IconButton';
import { useSettings } from '@/context/SettingsContext';
import { GlobalStyles } from '@/constants/GlobalStyles';

export default function SettingsModal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
  const { themeFont } = useSettings()!;

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.settingsHeader}>
            <Text style={[styles.settingsHeaderText, { fontFamily: GlobalStyles.fonts[themeFont] }]}>Settings</Text>
            <IconButton icon="close" size={24} color="#1E213F" style={{ opacity: 0.5 }} onPress={onClose} />
          </View>
          <View style={styles.settingsContent}>
            <SettingsForm onSubmit={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    maxWidth: 500,
    width: '100%',
    marginHorizontal: 'auto',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 46,
    paddingBottom: 72,
  },
  modalContent: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  settingsHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E1E1',
    padding: 24,
  },
  settingsHeaderText: {
    fontSize: 20,
  },
  settingsContent: {
    flex: 1,
  },
});
