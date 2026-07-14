import { Colors } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

export default function DiscussionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discussions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
});