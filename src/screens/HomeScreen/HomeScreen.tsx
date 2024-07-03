import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TextInput,
  View,
} from 'react-native';
import {User} from '~redux/api/interfaces';
import {useGetUsersQuery} from '~redux/api/listApi';
import styles from './styles';

export const HomeScreen = () => {
  const {isLoading, data, refetch, isError} = useGetUsersQuery(undefined);
  const [text, setText] = useState('');

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'There was an error, please try again');
    }
  }, [isError]);

  const filterList = (list: User[]) => {
    return list?.filter((listItem: User) =>
      listItem.login.toLowerCase().includes(text.toLowerCase()),
    );
  };

  const renderUsers = (item: User) => {
    return (
      <View style={styles.listItem}>
        <Image
          source={{
            uri: item.avatar_url,
          }}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.userName}>{item.login}</Text>
      </View>
    );
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.labelEmptyList}>No items available</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleScreen}>Users</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          value={text}
          onChangeText={value => setText(value)}
          style={styles.searchBar}
          placeholder="Search user"
        />
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={'#2177BF'} />
        </View>
      ) : (
        <FlatList
          data={filterList(data as User[])}
          renderItem={({item}) => renderUsers(item)}
          ListEmptyComponent={() => renderEmptyList()}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
