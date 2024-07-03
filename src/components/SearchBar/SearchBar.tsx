import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scaleF} from '~helpers/metrics';

interface Props {
  text: string;
  onChangeText: (value: string) => void;
}

export const SearchBar: React.FC<Props> = ({text, onChangeText}) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        value={text}
        onChangeText={value => onChangeText(value)}
        style={styles.searchBar}
        placeholder="Search user"
      />
      <Icon
        name="search"
        size={scaleF(24)}
        color={'#000'}
        style={styles.icon}
      />
    </View>
  );
};
