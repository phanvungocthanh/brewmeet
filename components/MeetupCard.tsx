import { Colors } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

type MeetupCardProps = {
  initials: string;
  title: string;
  time: string;
  location: string;
  attendeeCount: string;
};

export default function MeetupCard({
  initials,
  title,
  time,
  location,
  attendeeCount,
}: MeetupCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.details}>{time}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.attendeeText}>{attendeeCount}</Text>

        <View style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '700',
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  details: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 6,
  },
  location: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  attendeeText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  joinButton: {
    backgroundColor: Colors.primary,
    borderRadius: 999,
    paddingVertical: 9,
    paddingHorizontal: 20,
  },
  joinButtonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
});