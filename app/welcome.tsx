import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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

      <Pressable style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
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
  emoji: {
    fontSize: 56,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#2F241F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: '#6D625C',
    textAlign: 'center',
    lineHeight: 26,
    marginTop: 16,
  },
  button: {
    backgroundColor: '#7A4A2E',
    paddingVertical: 16,
    paddingHorizontal: 44,
    borderRadius: 14,
    marginTop: 36,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});