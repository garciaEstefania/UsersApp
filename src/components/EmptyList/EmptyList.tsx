import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface Props {
  label: string;
}

export const EmptyList: React.FC<Props> = ({label}) => {
  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.labelEmptyList}>{label}</Text>
    </View>
  );
};
