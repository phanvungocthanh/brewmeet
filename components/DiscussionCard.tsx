import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type DiscussionCardProps = {
  initials: string;
  author: string;
  postedTime: string;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments: number;
  onPress?: () => void;
};

export default function DiscussionCard({
  initials,
  author,
  postedTime,
  title,
  description,
  category,
  upvotes,
  comments,
  onPress,
}: DiscussionCardProps) {
  const [isUpvoted, setIsUpvoted] = useState(false);

  const displayedUpvotes = isUpvoted ? upvotes + 1 : upvotes;

  function handleUpvote() {
    setIsUpvoted((currentValue) => !currentValue);
  }

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.authorRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <Text style={styles.authorText}>
          {author} · {postedTime}
        </Text>
      </View>

      <View style={styles.categoryChip}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.actionRow}>
        <Pressable
          style={styles.action}
          onPress={(event) => {
            event.stopPropagation();
            handleUpvote();
          }}
          hitSlop={8}
        >
          <Ionicons
            name={isUpvoted ? 'arrow-up-circle' : 'arrow-up-circle-outline'}
            size={23}
            color={isUpvoted ? Colors.primary : Colors.textSecondary}
          />

          <Text
            style={[
              styles.actionText,
              isUpvoted && styles.activeActionText,
            ]}
          >
            {displayedUpvotes}
          </Text>
        </Pressable>

        <View style={styles.action}>
          <Ionicons
            name="chatbubble-outline"
            size={21}
            color={Colors.textSecondary}
          />

          <Text style={styles.actionText}>{comments}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F1E4D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: '800',
  },
  authorText: {
    color: Colors.textSecondary,
    fontSize: 15,
    fontWeight: '600',
  },
  categoryChip: {
    alignSelf: 'flex-start',
    backgroundColor: '#F8EEE5',
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 6,
    marginTop: 18,
  },
  categoryText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  title: {
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 25,
    color: Colors.textSecondary,
    marginTop: 10,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 28,
  },
  actionText: {
    color: Colors.textSecondary,
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 7,
  },
  activeActionText: {
    color: Colors.primary,
  },
});