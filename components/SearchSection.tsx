import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchSection() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});