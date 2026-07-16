import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function CoffeeDetailsScreen() {
  const router = useRouter();

const {
  name = 'Coffee Shop',
  rating = 'N/A',
  distance = 'Distance unavailable',
  tags: tagsParameter,
} = useLocalSearchParams<{
  name?: string;
  rating?: string;
  distance?: string;
  tags?: string;
}>();

let tags: string[] = [];

try {
  tags = tagsParameter ? JSON.parse(tagsParameter) : [];
} catch {
  tags = [];
}

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
    >
      <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
        hitSlop={10}
      >
        <Ionicons
          name="arrow-back"
          size={26}
          color={Colors.primary}
        />
      </Pressable>

      <View style={styles.imagePlaceholder}>
        <Ionicons
          name="cafe"
          size={70}
          color={Colors.primary}
        />
      </View>

      <Text style={styles.title}>{name}</Text>

      <Text style={styles.rating}>
        ⭐ {rating} · {distance}
      </Text>

      <View style={styles.tagRow}>
  {tags.map((tag) => (
    <View key={tag} style={styles.tag}>
      <Text style={styles.tagText}>{tag}</Text>
    </View>
  ))}
</View>

      <Text style={styles.sectionTitle}>About this café</Text>

      <Text style={styles.description}>
        A welcoming coffee shop for studying, remote work, relaxing, or
        meeting new people. More detailed café information will be added when
        BrewMeet connects to real coffee-shop data.
      </Text>
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
  imagePlaceholder: {
    height: 220,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 28,
    color: Colors.textPrimary,
  },
  rating: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  tag: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.primary,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 28,
  },
  description: {
    fontSize: 16,
    marginTop: 12,
    lineHeight: 26,
    color: Colors.textSecondary,
  },
});