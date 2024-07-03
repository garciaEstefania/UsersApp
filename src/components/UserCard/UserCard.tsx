import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {User} from '~redux/api/interfaces';

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = ({user}) => {
  return (
    <View style={styles.listItem}>
      <Image
        source={{
          uri: user.avatar_url,
        }}
        style={styles.avatar}
        resizeMode="cover"
      />
      <Text style={styles.userName}>{user.login}</Text>
    </View>
  );
};
