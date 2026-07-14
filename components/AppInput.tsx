import { Colors } from '@/constants/colors';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

type AppInputProps = TextInputProps;

export default function AppInput(props: AppInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor={Colors.textSecondary}
    />
  );
}

const styles = StyleSheet.create({
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