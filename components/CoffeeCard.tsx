import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type CoffeeCardProps = {
  name: string;
  rating: string;
  distance: string;
  tags: string[];
};

export default function CoffeeCard({
  name,
  rating,
  distance,
  tags,
}: CoffeeCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.shopInfo}>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.details}>
            ⭐ {rating} · {distance}
          </Text>
        </View>

        <Ionicons
          name="heart-outline"
          size={24}
          color={Colors.primary}
        />
      </View>

      <View style={styles.tagRow}>
        {tags.map((tag) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  shopInfo: {
    flex: 1,
    paddingRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  details: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 6,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 14,
  },
  tag: {
    backgroundColor: Colors.background,
    borderRadius: 999,
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
  },
});