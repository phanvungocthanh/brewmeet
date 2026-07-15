import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeHeader() {
  return (
    <>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.brand}>BrewMeet</Text>
          <Text style={styles.location}>Lewisville, TX</Text>
        </View>

        <View style={styles.profileCircle}>
          <Ionicons
            name="person-outline"
            size={22}
            color={Colors.primary}
          />
        </View>
      </View>

      <Text style={styles.greeting}>Good morning, Thanh!</Text>

      <Text style={styles.subtitle}>
        Where would you like to enjoy coffee today?
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.primary,
  },
  location: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 30,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 34,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.textSecondary,
    marginTop: 8,
  },
});