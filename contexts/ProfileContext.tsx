import {
    createContext,
    ReactNode,
    useContext,
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

  function updateProfile(updatedProfile: Profile) {
    setProfile(updatedProfile);
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