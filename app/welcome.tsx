import PrimaryButton from '@/components/PrimaryButton';
import { Colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  function handleContinue() {
    router.push('/login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>☕</Text>

      <Text style={styles.title}>Welcome to BrewMeet!</Text>

      <Text style={styles.subtitle}>
        Let&apos;s personalize your coffee experience.
      </Text>

      <PrimaryButton
        title="Continue"
        onPress={handleContinue}
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
  emoji: {
    fontSize: 56,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 26,
    marginTop: 16,
  },
});