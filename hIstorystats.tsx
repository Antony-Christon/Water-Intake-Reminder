// HistoryScreen.tsx
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  BarChart,
  LineChart,
} from 'react-native-gifted-charts';

const screenWidth = Dimensions.get('window').width;

const HistoryScreen: React.FC = () => {
  // Example data
  const dailyData = [
    { value: 2000, label: 'Mon' },
    { value: 2500, label: 'Tue' },
    { value: 1800, label: 'Wed' },
    { value: 3000, label: 'Thu' },
    { value: 2800, label: 'Fri' },
    { value: 2600, label: 'Sat' },
    { value: 3100, label: 'Sun' },
  ];
  const weeklyData = [
    { value: 15000, label: 'W1' },
    { value: 17000, label: 'W2' },
    { value: 16500, label: 'W3' },
    { value: 18000, label: 'W4' },
  ];
  const monthlyData = [
    { value: 60000, label: 'Aug' },
    { value: 62000, label: 'Sep' },
    { value: 58000, label: 'Oct' },
    { value: 65000, label: 'Nov' },
    { value: 70000, label: 'Dec' },
  ];
  const streak: number = 5;
  const achievements: string[] = [
    '7‑day streak 🏆',
    'Hit 3L goal 💧',
    'Consistent week ✅',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>📊 History & Stats</Text>

        {/* Daily intake chart */}
        <Text style={styles.sectionTitle}>Daily Intake (ml)</Text>
        <LineChart
          data={dailyData}
          width={screenWidth - 40}
          height={220}
          color="#3b82f6"
          thickness={3}
          noOfSections={5}
          yAxisTextStyle={{ color: '#1e3a8a' }}
          xAxisLabelTextStyle={{ color: '#1e3a8a' }}
          curved
        />

        {/* Weekly intake chart */}
        <Text style={styles.sectionTitle}>Weekly Intake (ml)</Text>
        <BarChart
          data={weeklyData}
          width={screenWidth - 40}
          height={220}
          barWidth={40}
          barBorderRadius={4}
          frontColor="#3b82f6"
          yAxisTextStyle={{ color: '#1e3a8a' }}
          xAxisLabelTextStyle={{ color: '#1e3a8a' }}
          noOfSections={5}
        />

        {/* Monthly intake chart */}
        <Text style={styles.sectionTitle}>Monthly Intake (ml)</Text>
        <BarChart
          data={monthlyData}
          width={screenWidth - 40}
          height={220}
          barWidth={40}
          barBorderRadius={4}
          frontColor="#3b82f6"
          yAxisTextStyle={{ color: '#1e3a8a' }}
          xAxisLabelTextStyle={{ color: '#1e3a8a' }}
          noOfSections={5}
        />

        {/* Streaks */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🔥 Streaks</Text>
          <Text style={styles.streakText}>Current streak: {streak} days</Text>
        </View>

        {/* Achievements */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🏅 Achievements</Text>
          {achievements.map((ach, idx) => (
            <Text key={idx} style={styles.achievementText}>
              • {ach}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e3a8a',
    marginBottom: 8,
  },
  chart: {
    borderRadius: 12,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },
  streakText: {
    fontSize: 16,
    color: '#0f172a',
    fontWeight: '600',
  },
  achievementText: {
    fontSize: 15,
    color: '#374151',
    marginTop: 4,
  },
});
