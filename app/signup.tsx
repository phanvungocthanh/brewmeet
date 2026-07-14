import PrimaryButton from '@/components/PrimaryButton';
import { Colors } from '@/constants/colors';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={Colors.textSecondary}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.textSecondary}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Colors.textSecondary}
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
  input: {
    backgroundColor: Colors.white,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    color: Colors.textPrimary,
  },
});