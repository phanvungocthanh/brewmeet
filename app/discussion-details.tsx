import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
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

const sampleReplies = [
  {
    id: '1',
    initials: 'JT',
    author: 'Jake T.',
    time: '1h ago',
    message:
      'I really like La La Land Kind Cafe. Their matcha is smooth and not too sweet.',
  },
  {
    id: '2',
    initials: 'EL',
    author: 'Emma L.',
    time: '35m ago',
    message:
      'Try Brewed in Fort Worth too. They have a great matcha latte and plenty of seating.',
  },
];

export default function DiscussionDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [replyText, setReplyText] = useState('');
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [replies, setReplies] = useState(sampleReplies);

  const title =
    typeof params.title === 'string'
      ? params.title
      : 'Best matcha in Dallas?';

  const description =
    typeof params.description === 'string'
      ? params.description
      : 'Looking for recommendations for the best matcha lattes in Dallas. Any suggestions?';

  const author =
    typeof params.author === 'string'
      ? params.author
      : 'Sarah M.';

  const category =
    typeof params.category === 'string'
      ? params.category
      : 'Best Matcha';

  const startingUpvotes =
    typeof params.upvotes === 'string'
      ? Number(params.upvotes)
      : 24;

  const displayedUpvotes = isUpvoted
    ? startingUpvotes + 1
    : startingUpvotes;

  function handlePostReply() {
    const trimmedReply = replyText.trim();

    if (!trimmedReply) {
      Alert.alert(
        'Write a reply',
        'Please enter a message before posting.'
      );
      return;
    }

    setReplies((currentReplies) => [
      ...currentReplies,
      {
        id: Date.now().toString(),
        initials: 'TP',
        author: 'Thanh P.',
        time: 'Just now',
        message: trimmedReply,
      },
    ]);

    setReplyText('');
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
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

        <View style={styles.authorRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>SM</Text>
          </View>

          <View>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.postedTime}>2h ago</Text>
          </View>
        </View>

        <View style={styles.categoryChip}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.actionRow}>
          <Pressable
            style={[
              styles.actionButton,
              isUpvoted && styles.actionButtonSelected,
            ]}
            onPress={() => setIsUpvoted((current) => !current)}
          >
            <Ionicons
              name={
                isUpvoted
                  ? 'arrow-up-circle'
                  : 'arrow-up-circle-outline'
              }
              size={23}
              color={
                isUpvoted
                  ? Colors.white
                  : Colors.textSecondary
              }
            />

            <Text
              style={[
                styles.actionText,
                isUpvoted && styles.actionTextSelected,
              ]}
            >
              {displayedUpvotes}
            </Text>
          </Pressable>

          <View style={styles.commentCount}>
            <Ionicons
              name="chatbubble-outline"
              size={21}
              color={Colors.textSecondary}
            />

            <Text style={styles.commentCountText}>
              {replies.length} replies
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.repliesTitle}>
          Replies
        </Text>

        {replies.map((reply) => (
          <View key={reply.id} style={styles.replyCard}>
            <View style={styles.replyHeader}>
              <View style={styles.replyAvatar}>
                <Text style={styles.replyAvatarText}>
                  {reply.initials}
                </Text>
              </View>

              <View style={styles.replyHeaderText}>
                <Text style={styles.replyAuthor}>
                  {reply.author}
                </Text>

                <Text style={styles.replyTime}>
                  {reply.time}
                </Text>
              </View>
            </View>

            <Text style={styles.replyMessage}>
              {reply.message}
            </Text>
          </View>
        ))}

        <Text style={styles.replyLabel}>
          Add a reply
        </Text>

        <TextInput
          style={styles.replyInput}
          placeholder="Share your thoughts..."
          placeholderTextColor={Colors.textSecondary}
          value={replyText}
          onChangeText={setReplyText}
          multiline
          textAlignVertical="top"
        />

        <Pressable
          style={styles.postButton}
          onPress={handlePostReply}
        >
          <Text style={styles.postButtonText}>
            Post Reply
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
    paddingTop: 58,
    paddingBottom: 60,
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
    marginBottom: 26,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F1E4D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: Colors.primary,
    fontWeight: '800',
  },
  author: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  postedTime: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 3,
  },
  categoryChip: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1E4D2',
    borderRadius: 999,
    paddingHorizontal: 13,
    paddingVertical: 7,
    marginTop: 22,
  },
  categoryText: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 16,
  },
  description: {
    fontSize: 17,
    lineHeight: 27,
    color: Colors.textSecondary,
    marginTop: 14,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  actionButtonSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  actionText: {
    color: Colors.textSecondary,
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 7,
  },
  actionTextSelected: {
    color: Colors.white,
  },
  commentCount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 22,
  },
  commentCountText: {
    color: Colors.textSecondary,
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 7,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 28,
  },
  repliesTitle: {
    fontSize: 23,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginBottom: 16,
  },
  replyCard: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
  },
  replyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  replyAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1E4D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  replyAvatarText: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: '800',
  },
  replyHeaderText: {
    marginLeft: 11,
  },
  replyAuthor: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.textPrimary,
  },
  replyTime: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  replyMessage: {
    fontSize: 15,
    lineHeight: 23,
    color: Colors.textSecondary,
    marginTop: 14,
  },
  replyLabel: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 20,
    marginBottom: 10,
  },
  replyInput: {
    minHeight: 120,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Colors.textPrimary,
  },
  postButton: {
    minHeight: 54,
    backgroundColor: Colors.primary,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  postButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '800',
  },
});