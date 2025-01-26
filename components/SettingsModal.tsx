import { Modal, StyleSheet, Text, View } from 'react-native';
import SettingsForm from './SettingsForm';
import IconButton from './ui/IconButton';

export default function SettingsModal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.settingsHeader}>
            <Text style={styles.settingsHeaderText}>Settings</Text>
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
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 46,
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
    fontWeight: 'bold',
  },
  settingsContent: {
    flex: 1,
    padding: 24,
  },
});
