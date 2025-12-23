// HomeScreen.tsx
import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const PROGRESS_BAR_WIDTH = 320; // px

const HomeScreen: React.FC = () => {
  const [dailyGoal, setDailyGoal] = useState<number>(3000); // ml
  const [intake, setIntake] = useState<number>(1000); // ml

  const percentage: number = useMemo(() => {
    if (dailyGoal <= 0) return 0;
    return Math.min(intake / dailyGoal, 1);
  }, [intake, dailyGoal]);

  const remaining: number = Math.max(dailyGoal - intake, 0);

  const addWater = (amount: number): void => {
    const next = intake + amount;
    if (next >= dailyGoal) {
      setIntake(dailyGoal);
      Alert.alert('Goal reached 🎉', 'You’ve met your daily water goal!');
    } else {
      setIntake(next);
    }
  };

  const resetDay = (): void => {
    setIntake(0);
    Alert.alert('Reset done', 'Daily intake has been reset to 0 ml.');
  };

  const decreaseGoal = (): void => {
    const newGoal = Math.max(dailyGoal - 250, 500);
    setDailyGoal(newGoal);
    setIntake((i) => Math.min(i, newGoal));
  };

  const increaseGoal = (): void => {
    setDailyGoal(dailyGoal + 250);
  };

  const tip: string = useMemo(() => {
    if (percentage === 0) return 'Start with a sip—your future self will thank you.';
    if (percentage < 0.33) return 'Consistency beats intensity. Keep sipping.';
    if (percentage < 0.66) return 'Good rhythm—keep your bottle within reach.';
    if (percentage < 1) return 'Almost there—one or two glasses will do.';
    return 'Hydration hero! Great job pacing your intake.';
  }, [percentage]);

  // Use numeric width to satisfy TypeScript ViewStyle typing
  const progressWidthPx: number = Math.round(percentage * PROGRESS_BAR_WIDTH);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>💧 Water Tracker</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today&apos;s progress</Text>

        {/* Progress bar with fixed pixel width */}
        <View style={[styles.progressBarBackground, { width: PROGRESS_BAR_WIDTH }]}>
          <View style={[styles.progressBarFill, { width: progressWidthPx }]} />
        </View>

        <View style={styles.progressTextRow}>
          <Text style={styles.progressText}>{Math.round(percentage * 100)}%</Text>
          <Text style={styles.progressSubText}>
            {intake} / {dailyGoal} ml
          </Text>
        </View>

        <Text style={styles.remainingText}>
          {remaining > 0 ? `${remaining} ml to go` : 'Goal completed 🎉'}
        </Text>
        <Text style={styles.tipText}>{tip}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => addWater(150)}>
          <Text style={styles.btnText}>+150 ml</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={() => addWater(250)}>
          <Text style={styles.btnTextPrimary}>+250 ml</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => addWater(500)}>
          <Text style={styles.btnText}>+500 ml</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.goalCard}>
        <View style={styles.goalHeader}>
          <Text style={styles.goalLabel}>Daily goal</Text>
          <Text style={styles.goalValue}>{dailyGoal} ml</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.goalBtn} onPress={decreaseGoal}>
            <Text style={styles.goalBtnText}>−250</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.goalBtn, styles.goalBtnPrimary]} onPress={increaseGoal}>
            <Text style={styles.goalBtnTextPrimary}>+250</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.resetBtn} onPress={resetDay}>
        <Text style={styles.resetText}>Reset day</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF',
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 10,
    fontWeight: '600',
  },
  progressBarBackground: {
    height: 16,
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
  },
  progressTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  progressText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  progressSubText: {
    fontSize: 14,
    color: '#475569',
  },
  remainingText: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
  },
  tipText: {
    fontSize: 13,
    fontStyle: 'italic',
    color: '#6B7280',
    marginTop: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: '#93C5FD',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  btnPrimary: {
    backgroundColor: '#3B82F6',
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  btnTextPrimary: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  goalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  goalLabel: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '600',
  },
  goalValue: {
    fontSize: 16,
    color: '#0F172A',
    fontWeight: '700',
  },
  goalBtn: {
    backgroundColor: '#E2E8F0',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  goalBtnPrimary: {
    backgroundColor: '#10B981',
  },
  goalBtnText: {
    color: '#0F172A',
    fontWeight: '700',
  },
  goalBtnTextPrimary: {
    color: '#06281c',
    fontWeight: '800',
  },
  resetBtn: {
    alignSelf: 'flex-start',
    backgroundColor: '#EF4444',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  resetText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
