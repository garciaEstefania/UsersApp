import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scaleF} from '~helpers/metrics';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={scaleF(35)} color={'#000'} />
    </Pressable>
  );
};
