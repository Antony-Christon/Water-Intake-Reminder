// TankCapacityScreen.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const TankCapacityScreen: React.FC = () => {
  const [capacity, setCapacity] = useState<number>(1000); // ml
  const [refills, setRefills] = useState<number>(0);

  const totalIntake = capacity * refills;

  const increaseRefill = () => {
    setRefills(refills + 1);
  };

  const resetRefills = () => {
    setRefills(0);
    Alert.alert('Reset done', 'Refill count reset to 0.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🛢️ Tank Capacity</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Enter tank/bottle capacity (ml):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={capacity.toString()}
          onChangeText={(text) => setCapacity(Number(text) || 0)}
        />

        <Text style={styles.info}>Capacity: {capacity} ml</Text>
        <Text style={styles.info}>Refills: {refills}</Text>
        <Text style={styles.info}>Total intake: {totalIntake} ml</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={increaseRefill}>
            <Text style={styles.btnText}>+1 Refill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnReset]} onPress={resetRefills}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TankCapacityScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f9ff', padding: 20 },
  title: { fontSize: 26, fontWeight: '700', color: '#0f172a', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, elevation: 3 },
  label: { fontSize: 16, color: '#374151', marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  info: { fontSize: 16, color: '#0f172a', marginVertical: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  btn: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  btnReset: { backgroundColor: '#ef4444' },
  btnText: { color: '#fff', fontWeight: '600' },
});
