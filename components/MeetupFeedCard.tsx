import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type MeetupFeedCardProps = {
  initials: string;
  hostName: string;
  postedDate: string;
  description: string;
  coffeeShop: string;
  time: string;
  category: string;
  attendeeCount: number;
  capacity: number;
};

export default function MeetupFeedCard({
  initials,
  hostName,
  postedDate,
  description,
  coffeeShop,
  time,
  category,
  attendeeCount,
  capacity,
}: MeetupFeedCardProps) {
  const [isJoined, setIsJoined] = useState(false);

  const currentAttendeeCount = isJoined
    ? attendeeCount + 1
    : attendeeCount;

  const isFull = currentAttendeeCount >= capacity && !isJoined;

  function handleJoinPress() {
    if (!isFull) {
      setIsJoined((currentValue) => !currentValue);
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.hostRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View>
          <Text style={styles.hostName}>{hostName}</Text>
          <Text style={styles.postedDate}>{postedDate}</Text>
        </View>
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.detailRow}>
        <Ionicons
          name="location-outline"
          size={19}
          color={Colors.primary}
        />
        <Text style={styles.detailText}>{coffeeShop}</Text>
      </View>

      <View style={styles.detailRow}>
        <Ionicons
          name="time-outline"
          size={19}
          color={Colors.primary}
        />
        <Text style={styles.detailText}>{time}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.cardFooter}>
        <View style={styles.categoryChip}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>

        <View style={styles.attendeeRow}>
          <Ionicons
            name="people-outline"
            size={19}
            color={Colors.textSecondary}
          />

          <Text style={styles.attendeeText}>
            {currentAttendeeCount} / {capacity} attending
          </Text>
        </View>
      </View>

      <Pressable
        style={[
          styles.joinButton,
          isJoined && styles.joinedButton,
          isFull && styles.fullButton,
        ]}
        onPress={handleJoinPress}
        disabled={isFull}
      >
        <Text style={styles.joinButtonText}>
          {isJoined ? 'Joined ✓' : isFull ? 'Meetup Full' : 'Join Meetup'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    padding: 18,
    marginBottom: 18,
  },
  hostRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F1E4D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  avatarText: {
    fontSize: 17,
    fontWeight: '800',
    color: Colors.primary,
  },
  hostName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  postedDate: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 3,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textPrimary,
    marginTop: 22,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },
  detailText: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginLeft: 9,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginTop: 20,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryChip: {
    backgroundColor: '#F8EEE5',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#C46A20',
  },
  attendeeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attendeeText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 7,
  },
  joinButton: {
    backgroundColor: Colors.primary,
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  joinedButton: {
    opacity: 0.82,
  },
  fullButton: {
    backgroundColor: Colors.textSecondary,
  },
  joinButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '800',
  },
});