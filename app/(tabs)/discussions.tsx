import DiscussionCard from '@/components/DiscussionCard';
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

const sortOptions = ['Hot', 'New', 'Top'];

const discussions = [
  {
    id: '1',
    initials: 'SM',
    author: 'Sarah M.',
    postedTime: '2h ago',
    title: 'Best matcha in Dallas?',
    description:
      'Looking for recommendations for the best matcha lattes in Dallas. Any suggestions?',
    category: 'Best Matcha',
    upvotes: 24,
    comments: 18,
    createdOrder: 4,
    hotScore: 82,
  },
  {
    id: '2',
    initials: 'JT',
    author: 'Jake T.',
    postedTime: '5h ago',
    title: 'Quiet cafés for studying in Brooklyn',
    description:
      'Need a quiet spot to study for finals. What are your go-to places in Brooklyn?',
    category: 'Study Spots',
    upvotes: 42,
    comments: 31,
    createdOrder: 3,
    hotScore: 94,
  },
  {
    id: '3',
    initials: 'EL',
    author: 'Emma L.',
    postedTime: '1d ago',
    title: 'Why is Brew Lab Coffee so popular?',
    description:
      "Seriously, every time I go there it's packed. Is their coffee really that good?",
    category: 'Coffee Reviews',
    upvotes: 67,
    comments: 53,
    createdOrder: 2,
    hotScore: 98,
  },
  {
    id: '4',
    initials: 'AK',
    author: 'Alex K.',
    postedTime: '2d ago',
    title: 'Coffee shops with the best natural light for photos',
    description:
      'Building a list of Instagram-worthy coffee shops. Drop your favorites!',
    category: 'NYC Cafes',
    upvotes: 38,
    comments: 22,
    createdOrder: 1,
    hotScore: 75,
  },
];

const popularTopics = [
  'Study Spots',
  'Coffee Reviews',
  'NYC Cafes',
  'Best Matcha',
  'WiFi & Outlets',
];

export default function DiscussionsScreen() {
  const [selectedSort, setSelectedSort] = useState('Hot');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const visibleDiscussions = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    const filtered = discussions.filter((discussion) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        discussion.title.toLowerCase().includes(normalizedSearch) ||
        discussion.description.toLowerCase().includes(normalizedSearch) ||
        discussion.author.toLowerCase().includes(normalizedSearch) ||
        discussion.category.toLowerCase().includes(normalizedSearch);

      const matchesTopic =
        selectedTopic === null || discussion.category === selectedTopic;

      return matchesSearch && matchesTopic;
    });

    return [...filtered].sort((first, second) => {
      if (selectedSort === 'New') {
        return second.createdOrder - first.createdOrder;
      }

      if (selectedSort === 'Top') {
        return second.upvotes - first.upvotes;
      }

      return second.hotScore - first.hotScore;
    });
  }, [searchQuery, selectedSort, selectedTopic]);

  function handleTopicPress(topic: string) {
    setSelectedTopic((currentTopic) =>
      currentTopic === topic ? null : topic
    );
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.pageTitle}>Discussions</Text>

        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={22}
            color={Colors.textSecondary}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search discussions"
            placeholderTextColor={Colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
          />
        </View>

        <View style={styles.sortRow}>
          {sortOptions.map((option) => {
            const isSelected = selectedSort === option;

            return (
              <Pressable
                key={option}
                style={[
                  styles.sortChip,
                  isSelected && styles.sortChipSelected,
                ]}
                onPress={() => setSelectedSort(option)}
              >
                {option === 'Hot' && (
                  <Ionicons
                    name="trending-up"
                    size={18}
                    color={
                      isSelected
                        ? Colors.white
                        : Colors.primary
                    }
                  />
                )}

                <Text
                  style={[
                    styles.sortText,
                    isSelected && styles.sortTextSelected,
                  ]}
                >
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.divider} />

        {visibleDiscussions.length > 0 ? (
          visibleDiscussions.map((discussion) => (
            <DiscussionCard
              key={discussion.id}
              initials={discussion.initials}
              author={discussion.author}
              postedTime={discussion.postedTime}
              title={discussion.title}
              description={discussion.description}
              category={discussion.category}
              upvotes={discussion.upvotes}
              comments={discussion.comments}
              onPress={() =>
  router.push({
    pathname: '/discussion-details',
    params: {
      title: discussion.title,
      description: discussion.description,
      author: discussion.author,
      category: discussion.category,
      upvotes: discussion.upvotes.toString(),
    },
  })
}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons
              name="chatbubbles-outline"
              size={44}
              color={Colors.primary}
            />

            <Text style={styles.emptyTitle}>No discussions found</Text>

            <Text style={styles.emptyText}>
              Try another search term or topic.
            </Text>
          </View>
        )}

        <View style={styles.topicsSection}>
          <Text style={styles.topicsTitle}>Popular Topics</Text>

          <View style={styles.topicRow}>
            {popularTopics.map((topic) => {
              const isSelected = selectedTopic === topic;

              return (
                <Pressable
                  key={topic}
                  style={[
                    styles.topicChip,
                    isSelected && styles.topicChipSelected,
                  ]}
                  onPress={() => handleTopicPress(topic)}
                >
                  <Text
                    style={[
                      styles.topicText,
                      isSelected && styles.topicTextSelected,
                    ]}
                  >
                    {topic}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <Pressable
        style={styles.floatingButton}
        onPress={() => router.push('/create-discussion')}
        accessibilityRole="button"
        accessibilityLabel="Create a discussion"
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
    paddingBottom: 140,
  },
  pageTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  searchBox: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5E9D8',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 17,
    paddingHorizontal: 16,
    marginTop: 28,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  sortRow: {
    flexDirection: 'row',
    marginTop: 22,
  },
  sortChip: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1E4D2',
    borderRadius: 999,
    paddingHorizontal: 22,
    marginRight: 10,
  },
  sortChipSelected: {
    backgroundColor: Colors.primary,
  },
  sortText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 5,
  },
  sortTextSelected: {
    color: Colors.white,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginTop: 28,
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
    marginTop: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 14,
  },
  emptyText: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginTop: 6,
  },
  topicsSection: {
    paddingTop: 30,
  },
  topicsTitle: {
    color: Colors.primary,
    fontSize: 17,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  topicRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  topicChip: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 999,
    paddingVertical: 9,
    paddingHorizontal: 16,
    marginRight: 9,
    marginBottom: 10,
  },
  topicChipSelected: {
    backgroundColor: Colors.primary,
  },
  topicText: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '700',
  },
  topicTextSelected: {
    color: Colors.white,
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