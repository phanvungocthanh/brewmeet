import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function MapCard() {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.title}>Coffee shops near you</Text>
          <Text style={styles.subtitle}>Based on Lewisville, TX</Text>
        </View>

        <View style={styles.iconCircle}>
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

        <View style={styles.pinOne}>
          <Ionicons name="cafe" size={16} color={Colors.white} />
        </View>

        <View style={styles.pinTwo}>
          <Ionicons name="cafe" size={16} color={Colors.white} />
        </View>

        <View style={styles.pinThree}>
          <Ionicons name="cafe" size={16} color={Colors.white} />
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
    borderRadius: 20,
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  iconCircle: {
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
  pinOne: {
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
  pinTwo: {
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
  pinThree: {
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
});