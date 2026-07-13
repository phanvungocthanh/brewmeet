import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>☕ BrewMeet</Text>

      <Text style={styles.title}>Welcome back!</Text>

      <Text style={styles.subtitle}>
        Continue your coffee journey.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Don't have an account?{' '}
        </Text>

        <Pressable onPress={() => router.push('/signup')}>
          <Text style={styles.signupText}>
            Create Account
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1E8',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7A4A2E',
    textAlign: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2F241F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6D625C',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 36,
    lineHeight: 24,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#7A4A2E',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#6D625C',
    fontSize: 15,
  },
  signupText: {
    color: '#7A4A2E',
    fontWeight: '700',
    fontSize: 15,
  },
});