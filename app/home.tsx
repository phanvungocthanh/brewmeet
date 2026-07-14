import { Colors } from '@/constants/colors';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.logo}>☕ BrewMeet</Text>

      <Text style={styles.greeting}>Good morning!</Text>

      <Text style={styles.subtitle}>
        Find a coffee shop that matches your mood today.
      </Text>

      <Text style={styles.sectionTitle}>Nearby coffee shops</Text>

      <View style={styles.card}>
        <Text style={styles.shopName}>White Rhino Coffee</Text>
        <Text style={styles.shopDetails}>⭐ 4.8 · 1.2 miles away</Text>
        <Text style={styles.shopTag}>💻 Great for studying</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.shopName}>Ascension Coffee</Text>
        <Text style={styles.shopDetails}>⭐ 4.6 · 2.3 miles away</Text>
        <Text style={styles.shopTag}>👥 Social and lively</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.shopName}>Lemma Coffee</Text>
        <Text style={styles.shopDetails}>⭐ 4.7 · 3.1 miles away</Text>
        <Text style={styles.shopTag}>☕ Great specialty coffee</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 40,
  },
  logo: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primary,
  },
  greeting: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 28,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 36,
    marginBottom: 16,
  },
  card: {
    backgroundColor: Colors.white,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
  },
  shopName: {
    fontSize: 19,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  shopDetails: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginTop: 8,
  },
  shopTag: {
    fontSize: 15,
    color: Colors.primary,
    marginTop: 12,
    fontWeight: '600',
  },
});