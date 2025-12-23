// ExploreScreen.tsx
import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const tips: string[] = [
  '💡 Carry a reusable bottle everywhere.',
  '🥤 Start your morning with a glass of water.',
  '🍋 Add lemon or fruit slices for flavor.',
  '⏰ Set reminders every 2 hours.',
  '🏃‍♂️ Hydrate before and after exercise.',
];

const articles = [
  {
    title: 'Why Hydration Matters',
    url: 'https://www.healthline.com/nutrition/7-health-benefits-of-water',
  },
  {
    title: 'Signs You’re Not Drinking Enough',
    url: 'https://www.medicalnewstoday.com/articles/dehydration',
  },
  {
    title: 'Best Times to Drink Water',
    url: 'https://www.webmd.com/diet/water-health-benefits',
  },
];

const ExploreScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>🚀 Explore</Text>

        {/* Tips Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Daily Hydration Tips</Text>
          {tips.map((tip, idx) => (
            <Text key={idx} style={styles.tipText}>
              • {tip}
            </Text>
          ))}
        </View>

        {/* Articles Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          {articles.map((article, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => Linking.openURL(article.url)}
            >
              <Text style={styles.linkText}>🔗 {article.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Motivation Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>🔥 Motivation</Text>
          <Text style={styles.motivationText}>
            “Every sip is a step toward a healthier you.”
          </Text>
          <Text style={styles.motivationText}>
            “Hydration fuels focus, energy, and happiness.”
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#064e3b',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#065f46',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 3,
  },
  tipText: {
    fontSize: 15,
    color: '#374151',
    marginTop: 4,
  },
  linkText: {
    fontSize: 15,
    color: '#2563eb',
    marginTop: 6,
    textDecorationLine: 'underline',
  },
  motivationText: {
    fontSize: 16,
    color: '#0f172a',
    marginTop: 6,
    fontStyle: 'italic',
  },
});
