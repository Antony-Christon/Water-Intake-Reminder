import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';

const badges = ['🥇 30‑day streak', '💧 100L milestone', '🏆 Consistency King'];

const AchievementsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🏅 Achievements</Text>
      <View style={styles.card}>
        {badges.map((badge, idx) => (
          <Text key={idx} style={styles.badgeText}>• {badge}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default AchievementsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f9ff', padding: 20 },
  title: { fontSize: 26, fontWeight: '700', color: '#1e3a8a', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16 },
  badgeText: { fontSize: 16, color: '#374151', marginTop: 6 },
});
