// WarningScreen.tsx
import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

interface WarningScreenProps {
  type?: 'reminder' | 'overload';
}

const WarningScreen: React.FC<WarningScreenProps> = ({ type = 'reminder' }) => {
  const message =
    type === 'reminder'
      ? '⏰ Time to Stop water Leakage!\nStay hydrated for better focus and energy.'
      : '⚠️ You may be exceeding safe intake.\nPause and check your daily limit.';

  const handleDismiss = () => {
    Alert.alert('Reminder dismissed', 'Stay mindful to prevent water leakage!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {type === 'reminder' ? 'Hydration Reminder' : 'Intake Warning'}
        </Text>
        <Text style={styles.message}>{message}</Text>

        <TouchableOpacity style={styles.btn} onPress={handleDismiss}>
          <Text style={styles.btnText}>Got it ✅</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WarningScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fef2f2', justifyContent: 'center', alignItems: 'center' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '85%',
    elevation: 5,
    alignItems: 'center',
  },
  title: { fontSize: 22, fontWeight: '700', color: '#b91c1c', marginBottom: 12 },
  message: { fontSize: 16, color: '#374151', textAlign: 'center', marginBottom: 20 },
  btn: { backgroundColor: '#ef4444', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: '600' },
});
