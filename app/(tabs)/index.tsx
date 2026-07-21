
import CoffeeCard from '@/components/CoffeeCard';
import HomeHeader from '@/components/HomeHeader';
import MapCard from '@/components/MapCard';
import MeetupCard from '@/components/MeetupCard';
import SearchSection from '@/components/SearchSection';
import { Colors } from '@/constants/colors';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
     <HomeHeader />

      <SearchSection />

      <Text style={styles.sectionTitle}>Explore nearby</Text>

      <MapCard />

      <Text style={styles.sectionTitle}>Recommended for you</Text>

      <CoffeeCard
        name="White Rhino Coffee"
        rating="4.8"
        distance="1.2 miles away"
        tags={['Quiet', 'Good Wi-Fi', 'Outlets']}
      />

      <CoffeeCard
        name="Ascension Coffee"
        rating="4.6"
        distance="2.3 miles away"
        tags={['Social', 'Great coffee', 'Lively']}
      />

      <Text style={styles.sectionTitle}>Meetups today</Text>

      <MeetupCard
        initials="TP"
        title="Study session at White Rhino"
        time="Today · 2:00 PM–5:00 PM"
        location="White Rhino Coffee"
        attendeeCount="3 people going"
      />

      <MeetupCard
        initials="AM"
        title="Coffee and networking"
        time="Today · 6:00 PM–7:30 PM"
        location="Ascension Coffee"
        attendeeCount="5 people going"
      />
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
  
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 34,
    marginBottom: 16,
  },
});