import AppInput from '@/components/AppInput';
import PrimaryButton from '@/components/PrimaryButton';
import { Colors } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

export default function SignUpScreen() {
  function handleCreateAccount() {
    console.log('Create Account button pressed');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>☕ BrewMeet</Text>

      <Text style={styles.title}>Create your account</Text>

      <Text style={styles.subtitle}>
        Start discovering coffee shops and meeting new people.
      </Text>

      <AppInput
        placeholder="Name"
        autoCapitalize="words"
      />

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
        title="Create Account"
        onPress={handleCreateAccount}
      />
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
    marginBottom: 32,
  },
});