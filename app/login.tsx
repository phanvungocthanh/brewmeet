import AppInput from '@/components/AppInput';
import PrimaryButton from '@/components/PrimaryButton';
import { Colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  function handleLogin() {
  router.replace('/(tabs)');
}

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>☕ BrewMeet</Text>

      <Text style={styles.title}>Welcome back!</Text>

      <Text style={styles.subtitle}>
        Continue your coffee journey.
      </Text>

      <AppInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <AppInput
        placeholder="Password"
        secureTextEntry
      />

      <PrimaryButton
        title="Log In"
        onPress={handleLogin}
      />

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Don&apos;t have an account?{' '}
        </Text>

        <Pressable onPress={() => router.push('/signup')}>
          <Text style={styles.signupText}>Create Account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 12,
    marginBottom: 36,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: Colors.textSecondary,
    fontSize: 15,
  },
  signupText: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 15,
  },
});