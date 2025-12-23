import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>👤 Profile</Text>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://placekitten.com/200/200' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.info}>Daily Goal: 3000 ml</Text>
        <Text style={styles.info}>Lifetime Intake: 1,200 L</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fefce8', padding: 20 },
  title: { fontSize: 26, fontWeight: '700', color: '#78350f', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: '600', color: '#0f172a' },
  info: { fontSize: 16, color: '#374151', marginTop: 4 },
});
