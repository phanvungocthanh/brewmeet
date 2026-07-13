import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

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
        autoCapitalize="words"
      />

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

      <Pressable style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>
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
    lineHeight: 24,
    marginTop: 12,
    marginBottom: 32,
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
});