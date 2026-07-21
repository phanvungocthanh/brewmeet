import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

import { useProfile } from '../../contexts/ProfileContext';

const favoriteCoffeeShops = [
  {
    id: '1',
    name: 'Brew Lab Coffee',
    rating: 4.8,
    distance: '0.3 mi',
    tags: ['Quiet', 'Study-friendly'],
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600',
  },
  {
    id: '2',
    name: 'The Daily Grind',
    rating: 4.5,
    distance: '0.5 mi',
    tags: ['Spacious', 'Power outlets'],
    image:
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600',
  },
  {
    id: '3',
    name: 'Urban Bean',
    rating: 4.7,
    distance: '0.7 mi',
    tags: ['Modern', 'Instagram-worthy'],
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600',
  },
];

const recentActivity = [
  {
    id: '1',
    icon: 'calendar-outline' as const,
    title: 'Joined meetup at Brew Lab Coffee',
    time: '2 days ago',
  },
  {
    id: '2',
    icon: 'heart-outline' as const,
    title: 'Saved Urban Bean to favorites',
    time: '5 days ago',
  },
  {
    id: '3',
    icon: 'location-outline' as const,
    title: 'Visited 3 new coffee shops',
    time: '1 week ago',
  },
];

export default function ProfileScreen() {
  const { profile } = useProfile();
  const router = useRouter();

  const [notificationsEnabled, setNotificationsEnabled] =
    useState(true);

  const [savedShopIds, setSavedShopIds] = useState([
    '1',
    '2',
    '3',
  ]);

  const initials = profile.name
    .trim()
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((namePart) => namePart[0]?.toUpperCase())
    .join('');

  function toggleFavorite(shopId: string) {
    setSavedShopIds((currentIds) =>
      currentIds.includes(shopId)
        ? currentIds.filter((id) => id !== shopId)
        : [...currentIds, shopId]
    );
  }

  function handleAccountOption(option: string) {
    console.log(`${option} pressed`);
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Profile</Text>

        <Pressable
          style={styles.settingsButton}
          onPress={() => handleAccountOption('Settings')}
          hitSlop={10}
        >
          <Ionicons
            name="settings-outline"
            size={25}
            color={Colors.primary}
          />
        </Pressable>
      </View>

      {/* Profile information */}
      <View style={styles.profileSection}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {initials || 'TP'}
          </Text>

          <Pressable
            style={styles.cameraButton}
            onPress={() =>
              console.log('Change profile photo pressed')
            }
          >
            <Ionicons
              name="camera"
              size={16}
              color={Colors.white}
            />
          </Pressable>
        </View>

        <Text style={styles.name}>{profile.name}</Text>

        <Text style={styles.profession}>
          {profile.profession}
        </Text>

        <View style={styles.locationRow}>
          <Ionicons
            name="location-outline"
            size={17}
            color={Colors.textSecondary}
          />

          <Text style={styles.locationText}>
            {profile.location}
          </Text>
        </View>

        <Text style={styles.bio}>{profile.bio}</Text>

        <Pressable
          style={styles.editProfileButton}
          onPress={() => router.push('/edit-profile')}
        >
          <Ionicons
            name="create-outline"
            size={19}
            color={Colors.primary}
          />

          <Text style={styles.editProfileText}>
            Edit Profile
          </Text>
        </Pressable>
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>
        <Pressable
          style={styles.statItem}
          onPress={() =>
            handleAccountOption('Saved coffee shops')
          }
        >
          <Text style={styles.statNumber}>
            {savedShopIds.length}
          </Text>

          <Text style={styles.statLabel}>
            Shops Saved
          </Text>
        </Pressable>

        <View style={styles.statDivider} />

        <Pressable
          style={styles.statItem}
          onPress={() => handleAccountOption('My meetups')}
        >
          <Text style={styles.statNumber}>8</Text>

          <Text style={styles.statLabel}>Meetups</Text>
        </Pressable>

        <View style={styles.statDivider} />

        <Pressable
          style={styles.statItem}
          onPress={() =>
            handleAccountOption('My discussions')
          }
        >
          <Text style={styles.statNumber}>24</Text>

          <Text style={styles.statLabel}>
            Discussions
          </Text>
        </Pressable>
      </View>

      {/* Coffee preferences */}
      <View style={styles.section}>
        <Text style={styles.uppercaseSectionTitle}>
          Coffee Preferences
        </Text>

        <View style={styles.preferenceRow}>
          {profile.preferences.map((preference) => (
            <View
              key={preference}
              style={styles.preferenceChip}
            >
              <Text style={styles.preferenceText}>
                {preference}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.sectionDivider} />

      {/* Favorite coffee shops */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Favorite Coffee Shops
          </Text>

          <Pressable
            onPress={() =>
              handleAccountOption(
                'See all favorite shops'
              )
            }
          >
            <Text style={styles.seeAllText}>
              See all
            </Text>
          </Pressable>
        </View>

        {favoriteCoffeeShops.map((shop) => {
          const isSaved = savedShopIds.includes(shop.id);

          return (
            <Pressable
              key={shop.id}
              style={styles.shopCard}
              onPress={() =>
                router.push('/coffee-details')
              }
            >
              <Image
                source={{ uri: shop.image }}
                style={styles.shopImage}
              />

              <View style={styles.shopInformation}>
                <Text style={styles.shopName}>
                  {shop.name}
                </Text>

                <View style={styles.shopMetaRow}>
                  <Ionicons
                    name="star"
                    size={17}
                    color="#C87324"
                  />

                  <Text style={styles.shopMetaText}>
                    {shop.rating}
                  </Text>

                  <Text style={styles.metaDot}>·</Text>

                  <Text style={styles.shopMetaText}>
                    {shop.distance}
                  </Text>
                </View>

                <View style={styles.shopTagRow}>
                  {shop.tags.map((tag) => (
                    <View
                      key={tag}
                      style={styles.shopTag}
                    >
                      <Text style={styles.shopTagText}>
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              <Pressable
                style={styles.favoriteButton}
                onPress={(event) => {
                  event.stopPropagation();
                  toggleFavorite(shop.id);
                }}
                hitSlop={10}
              >
                <Ionicons
                  name={
                    isSaved ? 'heart' : 'heart-outline'
                  }
                  size={27}
                  color={
                    isSaved
                      ? '#C87324'
                      : Colors.textSecondary
                  }
                />
              </Pressable>
            </Pressable>
          );
        })}
      </View>

      {/* Recent activity */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>
          Recent Activity
        </Text>

        {recentActivity.map((activity) => (
          <View
            key={activity.id}
            style={styles.activityRow}
          >
            <View style={styles.activityIcon}>
              <Ionicons
                name={activity.icon}
                size={22}
                color="#C87324"
              />
            </View>

            <View style={styles.activityInformation}>
              <Text style={styles.activityTitle}>
                {activity.title}
              </Text>

              <Text style={styles.activityTime}>
                {activity.time}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Account */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Account
        </Text>

        <View style={styles.accountCard}>
          <Pressable
            style={styles.accountRow}
            onPress={() =>
              handleAccountOption('Saved Meetups')
            }
          >
            <View style={styles.accountLeft}>
              <Ionicons
                name="bookmark-outline"
                size={22}
                color={Colors.primary}
              />

              <Text style={styles.accountText}>
                Saved Meetups
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </Pressable>

          <View style={styles.accountDivider} />

          <View style={styles.accountRow}>
            <View style={styles.accountLeft}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color={Colors.primary}
              />

              <Text style={styles.accountText}>
                Notifications
              </Text>
            </View>

            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{
                false: Colors.border,
                true: '#D9B999',
              }}
              thumbColor={
                notificationsEnabled
                  ? Colors.primary
                  : Colors.white
              }
              style={{
                transform: [{ translateY: 3 }],
              }}
            />
          </View>

          <View style={styles.accountDivider} />

          <Pressable
            style={styles.accountRow}
            onPress={() =>
              handleAccountOption('Privacy')
            }
          >
            <View style={styles.accountLeft}>
              <Ionicons
                name="shield-checkmark-outline"
                size={22}
                color={Colors.primary}
              />

              <Text style={styles.accountText}>
                Privacy
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </Pressable>

          <View style={styles.accountDivider} />

          <Pressable
            style={styles.accountRow}
            onPress={() =>
              handleAccountOption('Help and Support')
            }
          >
            <View style={styles.accountLeft}>
              <Ionicons
                name="help-circle-outline"
                size={22}
                color={Colors.primary}
              />

              <Text style={styles.accountText}>
                Help & Support
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color={Colors.textSecondary}
            />
          </Pressable>
        </View>

        <Pressable
          style={styles.signOutButton}
          onPress={() => handleAccountOption('Sign Out')}
        >
          <Ionicons
            name="log-out-outline"
            size={22}
            color="#A33A32"
          />

          <Text style={styles.signOutText}>
            Sign Out
          </Text>
        </Pressable>
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
    paddingTop: 58,
    paddingBottom: 135,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },

  pageTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: Colors.textPrimary,
  },

  settingsButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F1E4D2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 32,
    paddingBottom: 28,
  },

  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: '800',
  },

  cameraButton: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#C87324',
    borderWidth: 3,
    borderColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.textPrimary,
    marginTop: 20,
  },

  profession: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 8,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  locationText: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginLeft: 4,
  },

  bio: {
    maxWidth: 330,
    fontSize: 15,
    lineHeight: 23,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 14,
  },

  editProfileButton: {
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1E4D2',
    borderRadius: 14,
    paddingHorizontal: 24,
    marginTop: 18,
  },

  editProfileText: {
    fontSize: 15,
    fontWeight: '800',
    color: Colors.primary,
    marginLeft: 7,
  },

  statsContainer: {
    minHeight: 104,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.border,
  },

  statItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.textPrimary,
  },

  statLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 7,
  },

  statDivider: {
    width: 1,
    backgroundColor: Colors.border,
  },

  section: {
    paddingHorizontal: 22,
    paddingTop: 30,
  },

  sectionDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginTop: 24,
  },

  uppercaseSectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: Colors.textSecondary,
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: Colors.textPrimary,
  },

  preferenceRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },

  preferenceChip: {
    backgroundColor: '#F1E4D2',
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 9,
    marginBottom: 10,
  },

  preferenceText: {
    color: Colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  seeAllText: {
    color: '#C87324',
    fontSize: 16,
    fontWeight: '800',
  },

  shopCard: {
    minHeight: 134,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    padding: 14,
    marginBottom: 14,
  },

  shopImage: {
    width: 94,
    height: 104,
    borderRadius: 15,
    backgroundColor: Colors.border,
  },

  shopInformation: {
    flex: 1,
    marginLeft: 14,
  },

  shopName: {
    fontSize: 19,
    fontWeight: '800',
    color: Colors.textPrimary,
  },

  shopMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },

  shopMetaText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 5,
  },

  metaDot: {
    color: Colors.textSecondary,
    marginHorizontal: 7,
  },

  shopTagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  shopTag: {
    backgroundColor: '#F1E4D2',
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 6,
    marginBottom: 5,
  },

  shopTagText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '600',
  },

  favoriteButton: {
    alignSelf: 'flex-start',
    padding: 3,
  },

  activitySection: {
    backgroundColor: '#F5EDE2',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 22,
    paddingVertical: 30,
    marginTop: 20,
  },

  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
  },

  activityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F1DDC8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  activityInformation: {
    flex: 1,
    marginLeft: 14,
  },

  activityTitle: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.textPrimary,
    fontWeight: '600',
  },

  activityTime: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 5,
  },

  accountCard: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 19,
    paddingHorizontal: 17,
    marginTop: 16,
  },

  accountRow: {
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  accountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  accountText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginLeft: 13,
  },

  accountDivider: {
    height: 1,
    backgroundColor: Colors.border,
  },

  signOutButton: {
    minHeight: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9E8E6',
    borderRadius: 15,
    marginTop: 20,
  },

  signOutText: {
    color: '#A33A32',
    fontSize: 16,
    fontWeight: '800',
    marginLeft: 8,
  },
});