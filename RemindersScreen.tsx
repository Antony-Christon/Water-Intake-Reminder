import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Switch, View } from 'react-native';

const RemindersScreen: React.FC = () => {
  const [morning, setMorning] = useState(true);
  const [afternoon, setAfternoon] = useState(false);
  const [evening, setEvening] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>⏰ Reminders</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Morning (9 AM)</Text>
        <Switch value={morning} onValueChange={setMorning} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Afternoon (1 PM)</Text>
        <Switch value={afternoon} onValueChange={setAfternoon} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Evening (6 PM)</Text>
        <Switch value={evening} onValueChange={setEvening} />
      </View>
    </SafeAreaView>
  );
};

export default RemindersScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ecfdf5', padding: 20 },
  title: { fontSize: 26, fontWeight: '700', color: '#064e3b', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  label: { fontSize: 18, color: '#0f172a' },
});
