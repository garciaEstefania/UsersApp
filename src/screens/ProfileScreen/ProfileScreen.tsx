import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {RootStackScreenProps} from '~navigation/types';
import styles from './styles';
import {BackButton} from '~components/BackButton/BackButton';
import {ProfileCard} from '~components/ProfileCard/ProfileCard';

export const ProfileScreen = ({route}: RootStackScreenProps<'Profile'>) => {
  const {user} = route.params;

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <BackButton />
      <View style={styles.cardContainer}>
        <ProfileCard user={user} />
      </View>
    </View>
  );
};
