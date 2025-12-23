// SettingsScreen.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Switch,
  TouchableOpacity,
} from 'react-native';

const SettingsScreen: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [useOunces, setUseOunces] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>

      {/* Theme toggle */}
      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* Units toggle */}
      <View style={styles.row}>
        <Text style={styles.label}>Use Ounces (oz)</Text>
        <Switch value={useOunces} onValueChange={setUseOunces} />
      </View>

      {/* Reset option */}
      <TouchableOpacity style={styles.resetBtn} onPress={() => {
        setDarkMode(false);
        setUseOunces(false);
      }}>
        <Text style={styles.resetText}>Reset to Defaults</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb', padding: 20 },
  title: { fontSize: 26, fontWeight: '700', color: '#111827', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  label: { fontSize: 18, color: '#374151' },
  resetBtn: {
    marginTop: 30,
    backgroundColor: '#ef4444',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  resetText: { color: '#fff', fontWeight: '600' },
});
