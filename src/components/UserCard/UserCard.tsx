import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {User} from '~redux/api/interfaces';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scaleF} from '~helpers/metrics';

interface Props {
  user: User;
}

export const UserCard: React.FC<Props> = ({user}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.listItem}
      onPress={() => navigation.navigate('Profile', {user})}>
      <Image
        source={{
          uri: user.avatar_url,
        }}
        style={styles.avatar}
        resizeMode="cover"
      />
      <Text style={styles.userName}>{user.login}</Text>
      <View style={styles.iconContainer}>
        <Icon name="keyboard-arrow-right" size={scaleF(30)} color={'#000'} />
      </View>
    </Pressable>
  );
};
