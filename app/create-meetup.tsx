import AppInput from '@/components/AppInput';
import PrimaryButton from '@/components/PrimaryButton';
import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function CreateMeetupScreen() {
  const router = useRouter();

  function handleCreateMeetup() {
    console.log('Create Meetup button pressed');
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
        hitSlop={10}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color={Colors.primary}
        />
      </Pressable>

      <Text style={styles.title}>Create Meetup</Text>

      <Text style={styles.subtitle}>
        Invite people to meet you at a coffee shop.
      </Text>

      <Text style={styles.label}>Meetup title</Text>
      <AppInput placeholder="Example: Study session" />

      <Text style={styles.label}>Coffee shop</Text>
      <AppInput placeholder="Enter a café name" />

      <Text style={styles.label}>Date and time</Text>
      <AppInput placeholder="Example: Saturday at 2:00 PM" />

      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryRow}>
        <View style={styles.categoryChip}>
          <Text style={styles.categoryText}>Study</Text>
        </View>

        <View style={styles.categoryChip}>
          <Text style={styles.categoryText}>Hangout</Text>
        </View>

        <View style={styles.categoryChip}>
          <Text style={styles.categoryText}>Networking</Text>
        </View>
      </View>

      <Text style={styles.label}>Maximum attendees</Text>
      <AppInput
        placeholder="Example: 6"
        keyboardType="number-pad"
      />

      <Text style={styles.label}>Description</Text>
      <AppInput
        placeholder="Tell people what the meetup is about"
        multiline
        numberOfLines={4}
        style={styles.descriptionInput}
      />

      <PrimaryButton
        title="Create Meetup"
        onPress={handleCreateMeetup}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 58,
    paddingBottom: 50,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textSecondary,
    marginTop: 10,
    marginBottom: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 18,
  },
  categoryChip: {
    backgroundColor: '#F1E4D2',
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    color: Colors.primary,
    fontWeight: '700',
  },
  descriptionInput: {
    minHeight: 110,
    textAlignVertical: 'top',
  },
});