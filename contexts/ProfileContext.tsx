import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

type Profile = {
  name: string;
  profession: string;
  location: string;
  bio: string;
  preferences: string[];
};

type ProfileContextType = {
  profile: Profile;
  updateProfile: (updatedProfile: Profile) => void;
};

const PROFILE_STORAGE_KEY = 'brewmeet-profile';

const defaultProfile: Profile = {
  name: 'Thanh Phan',
  profession: 'Operations Analyst',
  location: 'Lewisville, Texas',
  bio: 'Coffee lover, product builder, and café explorer.',
  preferences: [
    'Quiet spaces',
    'Good WiFi',
    'Remote work',
    'Great coffee',
  ],
};

const ProfileContext =
  createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [profile, setProfile] =
    useState<Profile>(defaultProfile);

  useEffect(() => {
    loadSavedProfile();
  }, []);

  async function loadSavedProfile() {
    try {
      const savedProfile = await AsyncStorage.getItem(
        PROFILE_STORAGE_KEY
      );

      if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
      }
    } catch (error) {
      console.error('Unable to load profile:', error);
    }
  }

  async function updateProfile(updatedProfile: Profile) {
    try {
      setProfile(updatedProfile);

      await AsyncStorage.setItem(
        PROFILE_STORAGE_KEY,
        JSON.stringify(updatedProfile)
      );
    } catch (error) {
      console.error('Unable to save profile:', error);
    }
  }

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      'useProfile must be used inside ProfileProvider'
    );
  }

  return context;
}