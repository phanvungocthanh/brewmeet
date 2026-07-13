import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>☕ BrewMeet</Text>

      <Text style={styles.title}>
        Find your perfect coffee spot.
      </Text>

      <Text style={styles.subtitle}>
        Discover cafés for studying, working, relaxing, and meeting new people.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1E8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  brand: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7A4A2E',
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#2F241F',
    textAlign: 'center',
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 17,
    color: '#6D625C',
    textAlign: 'center',
    lineHeight: 26,
    marginTop: 16,
  },
});