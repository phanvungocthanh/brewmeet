import { Colors } from '@/constants/colors';
import { Pressable, StyleSheet, Text } from 'react-native';

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
};

export default function PrimaryButton({
  title,
  onPress,
}: PrimaryButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 36,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: '700',
  },
});