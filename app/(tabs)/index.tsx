import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
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

      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={20}
            color={Colors.textSecondary}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search by ZIP code or city"
            placeholderTextColor={Colors.textSecondary}
          />
        </View>

        <View style={styles.filterButton}>
          <Ionicons
            name="options-outline"
            size={22}
            color={Colors.white}
          />
        </View>
      </View>

      <Text style={styles.sectionTitle}>Explore nearby</Text>

      <View style={styles.mapCard}>
        <View style={styles.mapTopRow}>
          <View>
            <Text style={styles.mapTitle}>Coffee shops near you</Text>
            <Text style={styles.mapSubtitle}>Based on Lewisville, TX</Text>
          </View>

          <View style={styles.mapIconCircle}>
            <Ionicons
              name="location-outline"
              size={20}
              color={Colors.primary}
            />
          </View>
        </View>

        <View style={styles.fakeMap}>
          <Ionicons
            name="map-outline"
            size={52}
            color={Colors.primary}
          />

          <Text style={styles.fakeMapText}>Map preview</Text>

          <View style={styles.mapPinOne}>
            <Ionicons name="cafe" size={16} color={Colors.white} />
          </View>

          <View style={styles.mapPinTwo}>
            <Ionicons name="cafe" size={16} color={Colors.white} />
          </View>

          <View style={styles.mapPinThree}>
            <Ionicons name="cafe" size={16} color={Colors.white} />
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recommended for you</Text>

      <View style={styles.coffeeCard}>
        <View style={styles.coffeeCardTop}>
          <View>
            <Text style={styles.coffeeName}>White Rhino Coffee</Text>
            <Text style={styles.coffeeDetails}>⭐ 4.8 · 1.2 miles away</Text>
          </View>

          <Ionicons
            name="heart-outline"
            size={24}
            color={Colors.primary}
          />
        </View>

        <View style={styles.tagRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Quiet</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>Good Wi-Fi</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>Outlets</Text>
          </View>
        </View>
      </View>

      <View style={styles.coffeeCard}>
        <View style={styles.coffeeCardTop}>
          <View>
            <Text style={styles.coffeeName}>Ascension Coffee</Text>
            <Text style={styles.coffeeDetails}>⭐ 4.6 · 2.3 miles away</Text>
          </View>

          <Ionicons
            name="heart-outline"
            size={24}
            color={Colors.primary}
          />
        </View>

        <View style={styles.tagRow}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Social</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>Great coffee</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>Lively</Text>
          </View>
        </View>
      </View>
   <Text style={styles.sectionTitle}>Meetups today</Text>

<View style={styles.meetupCard}>
  <View style={styles.meetupTopRow}>
    <View style={styles.avatarCircle}>
      <Text style={styles.avatarText}>TP</Text>
    </View>

    <View style={styles.meetupInfo}>
      <Text style={styles.meetupTitle}>Study session at White Rhino</Text>
      <Text style={styles.meetupDetails}>Today · 2:00 PM–5:00 PM</Text>
      <Text style={styles.meetupLocation}>White Rhino Coffee</Text>
    </View>
  </View>

  <View style={styles.meetupFooter}>
    <Text style={styles.attendeeText}>3 people going</Text>

    <View style={styles.joinButton}>
      <Text style={styles.joinButtonText}>Join</Text>
    </View>
  </View>
</View>

<View style={styles.meetupCard}>
  <View style={styles.meetupTopRow}>
    <View style={styles.avatarCircle}>
      <Text style={styles.avatarText}>AM</Text>
    </View>

    <View style={styles.meetupInfo}>
      <Text style={styles.meetupTitle}>Coffee and networking</Text>
      <Text style={styles.meetupDetails}>Today · 6:00 PM–7:30 PM</Text>
      <Text style={styles.meetupLocation}>Ascension Coffee</Text>
    </View>
  </View>

  <View style={styles.meetupFooter}>
    <Text style={styles.attendeeText}>5 people going</Text>

    <View style={styles.joinButton}>
      <Text style={styles.joinButtonText}>Join</Text>
    </View>
  </View>
</View>
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
    paddingTop: 62,
    paddingBottom: 120,
  },
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
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26,
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
    fontSize: 16,
    color: Colors.textPrimary,
    marginLeft: 10,
  },
  filterButton: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 34,
    marginBottom: 16,
  },
  mapCard: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    padding: 16,
  },
  mapTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  mapSubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  mapIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fakeMap: {
    height: 220,
    borderRadius: 16,
    backgroundColor: '#E8E1D7',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  fakeMapText: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginTop: 8,
  },
  mapPinOne: {
    position: 'absolute',
    top: 40,
    left: 44,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPinTwo: {
    position: 'absolute',
    top: 92,
    right: 52,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPinThree: {
    position: 'absolute',
    bottom: 34,
    left: 118,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coffeeCard: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  coffeeCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  coffeeName: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  coffeeDetails: {
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

  meetupCard: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
  },
  meetupTopRow: {
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
  meetupInfo: {
    flex: 1,
    marginLeft: 14,
  },
  meetupTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  meetupDetails: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 6,
  },
  meetupLocation: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
    marginTop: 4,
  },
  meetupFooter: {
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