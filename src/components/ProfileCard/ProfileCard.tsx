import React from 'react';
import {Image, Linking, Pressable, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {generateQR} from '~helpers/generateQR';
import {User} from '~redux/api/interfaces';
import {scaleF} from '~helpers/metrics';

interface Props {
  user: User;
}

export const ProfileCard: React.FC<Props> = ({user}) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: user.avatar_url,
          }}
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.userName}>{user?.login}</Text>
      <Pressable
        onPress={() => Linking.openURL(user.html_url)}
        style={styles.linkButton}>
        <Text style={styles.buttonLabel}>View Full profile</Text>
        <Icon name="open-in-new" size={scaleF(16)} color={'#fff'} />
      </Pressable>
      <Image source={{uri: generateQR(user.html_url)}} style={styles.qrImage} />
    </View>
  );
};
