import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const categories = ['All', 'Study', 'Hangout', 'Networking'];

export default function MeetupsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Coffee Meetups</Text>

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Ionicons
              name="search-outline"
              size={21}
              color={Colors.textSecondary}
            />

            <TextInput
              style={styles.searchInput}
              placeholder="Search by ZIP or date"
              placeholderTextColor={Colors.textSecondary}
            />
          </View>

          <Pressable style={styles.filterButton}>
            <Ionicons
              name="options-outline"
              size={22}
              color={Colors.textPrimary}
            />
          </Pressable>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
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
        </ScrollView>

        <View style={styles.divider} />

        <View style={styles.placeholderCard}>
          <Text style={styles.placeholderText}>
            Meetup cards will appear here next.
          </Text>
        </View>
      </ScrollView>

      <Pressable style={styles.floatingButton}>
        <Ionicons name="add" size={30} color={Colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    paddingTop: 62,
    paddingHorizontal: 22,
    paddingBottom: 130,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  searchBox: {
    flex: 1,
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  filterButton: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  categoryRow: {
    paddingTop: 22,
    paddingBottom: 4,
  },
  categoryChip: {
    backgroundColor: '#F1E4D2',
    borderRadius: 999,
    paddingVertical: 11,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  categoryChipSelected: {
    backgroundColor: Colors.primary,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
  categoryTextSelected: {
    color: Colors.white,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginTop: 24,
    marginBottom: 24,
  },
  placeholderCard: {
    minHeight: 180,
    backgroundColor: Colors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  placeholderText: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  floatingButton: {
    position: 'absolute',
    right: 22,
    bottom: 108,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});