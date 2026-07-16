import MeetupFeedCard from '@/components/MeetupFeedCard';
import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const categories = ['All', 'Study', 'Hangout', 'Networking'];

const meetups = [
  {
    id: '1',
    initials: 'LC',
    hostName: 'Lauren Chen',
    postedDate: 'Posted Today',
    description: 'Working on a coding project. Feel free to join!',
    coffeeShop: 'Brew Lab Coffee',
    time: 'Today at 3:00 PM',
    category: 'Study',
    attendeeCount: 3,
    capacity: 6,
  },
  {
    id: '2',
    initials: 'MR',
    hostName: 'Max Rodriguez',
    postedDate: 'Posted Tomorrow',
    description: 'Morning coffee and networking for tech professionals.',
    coffeeShop: 'The Daily Grind',
    time: 'Tomorrow at 10:00 AM',
    category: 'Networking',
    attendeeCount: 5,
    capacity: 8,
  },
  {
    id: '3',
    initials: 'CW',
    hostName: 'Caddy Williams',
    postedDate: 'Posted Today',
    description:
      'Just moved to NYC! Looking to meet new people over coffee ☕',
    coffeeShop: 'Urban Bean',
    time: 'Today at 2:00 PM',
    category: 'Hangout',
    attendeeCount: 2,
    capacity: 5,
  },
];

export default function MeetupsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const filteredMeetups = useMemo(() => {
  const normalizedSearch = searchQuery.trim().toLowerCase();

    return meetups.filter((meetup) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        meetup.category === selectedCategory;

      const matchesSearch =
        normalizedSearch.length === 0 ||
        meetup.coffeeShop.toLowerCase().includes(normalizedSearch) ||
        meetup.hostName.toLowerCase().includes(normalizedSearch) ||
        meetup.description.toLowerCase().includes(normalizedSearch) ||
        meetup.time.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
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
              placeholder="Search by café, host, or date"
              placeholderTextColor={Colors.textSecondary}
              value={searchQuery}
              onChangeText={setSearchQuery}
              returnKeyType="search"
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

        {filteredMeetups.length > 0 ? (
          filteredMeetups.map((meetup) => (
            <MeetupFeedCard
              key={meetup.id}
              initials={meetup.initials}
              hostName={meetup.hostName}
              postedDate={meetup.postedDate}
              description={meetup.description}
              coffeeShop={meetup.coffeeShop}
              time={meetup.time}
              category={meetup.category}
              attendeeCount={meetup.attendeeCount}
              capacity={meetup.capacity}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons
              name="cafe-outline"
              size={42}
              color={Colors.primary}
            />

            <Text style={styles.emptyTitle}>No meetups found</Text>

            <Text style={styles.emptyText}>
              Try a different category or search term.
            </Text>
          </View>
        )}
      </ScrollView>

      <Pressable
  style={styles.floatingButton}
  onPress={() => router.push('/create-meetup')}
  accessibilityRole="button"
  accessibilityLabel="Create a meetup"
>
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
  emptyState: {
    minHeight: 220,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 14,
  },
  emptyText: {
    fontSize: 15,
    lineHeight: 22,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 6,
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