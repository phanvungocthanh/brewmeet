import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const coffeePreferences = [
  'Quiet spaces',
  'Good WiFi',
  'Remote work',
  'Study-friendly',
  'Power outlets',
  'Outdoor seating',
  'Great coffee',
  'Instagram-worthy',
];

export default function EditProfileScreen() {
  const [name, setName] = useState('Thanh Phan');
  const [profession, setProfession] = useState(
    'Operations Analyst'
  );
  const [location, setLocation] = useState(
    'Lewisville, Texas'
  );
  const [bio, setBio] = useState(
    'Coffee lover, product builder, and café explorer.'
  );

  const [selectedPreferences, setSelectedPreferences] =
    useState([
      'Quiet spaces',
      'Good WiFi',
      'Remote work',
      'Great coffee',
    ]);

  function togglePreference(preference: string) {
    setSelectedPreferences((currentPreferences) => {
      if (currentPreferences.includes(preference)) {
        return currentPreferences.filter(
          (item) => item !== preference
        );
      }

      return [...currentPreferences, preference];
    });
  }

  function handleSave() {
    if (!name.trim()) {
      Alert.alert(
        'Name required',
        'Please enter your name.'
      );
      return;
    }

    Alert.alert(
      'Profile updated',
      'Your changes have been saved.',
      [
        {
          text: 'Done',
          onPress: () =>
            router.replace('/(tabs)/profile'),
        },
      ]
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={
        Platform.OS === 'ios' ? 'padding' : undefined
      }
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() =>
              router.replace('/(tabs)/profile')
            }
          >
            <Ionicons
              name="arrow-back"
              size={25}
              color={Colors.primary}
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            Edit Profile
          </Text>

          <Pressable onPress={handleSave}>
            <Text style={styles.headerSave}>
              Save
            </Text>
          </Pressable>
        </View>

        {/* Profile photo */}
        <View style={styles.photoSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>TP</Text>

            <Pressable
              style={styles.cameraButton}
              onPress={() =>
                Alert.alert(
                  'Profile photo',
                  'We will connect photo uploads later.'
                )
              }
            >
              <Ionicons
                name="camera"
                size={18}
                color={Colors.white}
              />
            </Pressable>
          </View>

          <Pressable
            onPress={() =>
              Alert.alert(
                'Profile photo',
                'We will connect photo uploads later.'
              )
            }
          >
            <Text style={styles.changePhotoText}>
              Change profile photo
            </Text>
          </Pressable>
        </View>

        {/* Personal information */}
        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>

        <Text style={styles.label}>Name</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor={Colors.textSecondary}
        />

        <Text style={styles.label}>Profession</Text>

        <TextInput
          style={styles.input}
          value={profession}
          onChangeText={setProfession}
          placeholder="Enter your profession"
          placeholderTextColor={Colors.textSecondary}
        />

        <Text style={styles.label}>Location</Text>

        <View style={styles.iconInputContainer}>
          <Ionicons
            name="location-outline"
            size={21}
            color={Colors.textSecondary}
          />

          <TextInput
            style={styles.iconInput}
            value={location}
            onChangeText={setLocation}
            placeholder="City, State"
            placeholderTextColor={Colors.textSecondary}
          />
        </View>

        <Text style={styles.label}>Bio</Text>

        <TextInput
          style={[styles.input, styles.bioInput]}
          value={bio}
          onChangeText={setBio}
          placeholder="Tell people about yourself"
          placeholderTextColor={Colors.textSecondary}
          multiline
          maxLength={160}
          textAlignVertical="top"
        />

        <Text style={styles.characterCount}>
          {bio.length}/160
        </Text>

        {/* Coffee preferences */}
        <Text style={styles.sectionTitle}>
          Coffee Preferences
        </Text>

        <Text style={styles.sectionDescription}>
          Choose what matters most when you visit a coffee
          shop.
        </Text>

        <View style={styles.chipContainer}>
          {coffeePreferences.map((preference) => {
            const isSelected =
              selectedPreferences.includes(preference);

            return (
              <Pressable
                key={preference}
                style={[
                  styles.chip,
                  isSelected && styles.selectedChip,
                ]}
                onPress={() =>
                  togglePreference(preference)
                }
              >
                {isSelected && (
                  <Ionicons
                    name="checkmark"
                    size={16}
                    color={Colors.white}
                  />
                )}

                <Text
                  style={[
                    styles.chipText,
                    isSelected &&
                      styles.selectedChipText,
                  ]}
                >
                  {preference}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Save button */}
        <Pressable
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>
            Save Changes
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    paddingHorizontal: 22,
    paddingTop: 60,
    paddingBottom: 50,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: Colors.textPrimary,
  },

  headerSave: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.primary,
  },

  photoSection: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 34,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 34,
    fontWeight: '800',
    color: Colors.white,
  },

  cameraButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#B9682D',
    borderWidth: 3,
    borderColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  changePhotoText: {
    marginTop: 13,
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primary,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 16,
  },

  sectionDescription: {
    fontSize: 14,
    lineHeight: 21,
    color: Colors.textSecondary,
    marginTop: -8,
    marginBottom: 16,
  },

  label: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginBottom: 8,
  },

  input: {
    minHeight: 54,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 20,
  },

  iconInputContainer: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  iconInput: {
    flex: 1,
    marginLeft: 9,
    fontSize: 16,
    color: Colors.textPrimary,
  },

  bioInput: {
    minHeight: 120,
    marginBottom: 6,
  },

  characterCount: {
    alignSelf: 'flex-end',
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 28,
  },

  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1E2CE',
    borderRadius: 999,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 9,
    marginBottom: 10,
  },

  selectedChip: {
    backgroundColor: Colors.primary,
  },

  chipText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary,
  },

  selectedChipText: {
    color: Colors.white,
    marginLeft: 5,
  },

  saveButton: {
    minHeight: 56,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },

  saveButtonText: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.white,
  },
});