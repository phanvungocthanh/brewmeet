import PrimaryButton from '@/components/PrimaryButton';
import { Colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  function handleGetStarted() {
    router.push('/welcome');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>☕ BrewMeet</Text>

      <Text style={styles.title}>
        Find your perfect coffee spot.
      </Text>

      <Text style={styles.subtitle}>
        Discover cafés for studying, working, relaxing, and meeting new people.
      </Text>

      <PrimaryButton
        title="Get Started"
        onPress={handleGetStarted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  brand: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 17,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 26,
    marginTop: 16,
  },
});