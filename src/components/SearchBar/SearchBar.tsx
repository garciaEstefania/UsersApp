import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

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
    </View>
  );
};
