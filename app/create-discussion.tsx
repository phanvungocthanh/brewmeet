import AppInput from '@/components/AppInput';
import PrimaryButton from '@/components/PrimaryButton';
import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const categories = [
  'Study Spots',
  'Coffee Reviews',
  'NYC Cafes',
  'Best Matcha',
  'WiFi & Outlets',
];

export default function CreateDiscussionScreen() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(
    'Study Spots'
  );

  function handleCreateDiscussion() {
    console.log('Create Discussion button pressed');
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

      <Text style={styles.title}>Create Discussion</Text>

      <Text style={styles.subtitle}>
        Ask a question or start a conversation with other coffee lovers.
      </Text>

      <Text style={styles.label}>Discussion title</Text>

      <AppInput placeholder="What would you like to discuss?" />

      <Text style={styles.label}>Category</Text>

      <View style={styles.categoryRow}>
        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <Pressable
              key={category}
              style={[
                styles.categoryChip,
                isSelected && styles.categoryChipSelected,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.categoryTextSelected,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.label}>Description</Text>

      <AppInput
        placeholder="Add more details to help people understand your post"
        multiline
        numberOfLines={6}
        style={styles.descriptionInput}
      />

      <PrimaryButton
        title="Post Discussion"
        onPress={handleCreateDiscussion}
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
    paddingHorizontal: 15,
    marginRight: 9,
    marginBottom: 10,
  },
  categoryChipSelected: {
    backgroundColor: Colors.primary,
  },
  categoryText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  categoryTextSelected: {
    color: Colors.white,
  },
  descriptionInput: {
    minHeight: 140,
    textAlignVertical: 'top',
  },
});