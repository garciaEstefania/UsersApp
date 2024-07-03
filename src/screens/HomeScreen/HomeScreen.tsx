import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {User} from '~redux/api/interfaces';
import {useGetUsersQuery} from '~redux/api/listApi';
import styles from './styles';
import {UserCard} from '~components/UserCard/UserCard';
import {EmptyList} from '~components/EmptyList/EmptyList';
import {SearchBar} from '~components/SearchBar/SearchBar';
import {useFilterData} from '~hooks/useFilterData';

export const HomeScreen = () => {
  const {isLoading, data, refetch, isError} = useGetUsersQuery(undefined);
  const {filterList, text, setText} = useFilterData();

  useEffect(() => {
    if (isError) {
      Alert.alert('Error', 'There was an error, please try again');
    }
  }, [isError]);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView />
      <View style={styles.titleContainer}>
        <Text style={styles.titleScreen}>Users</Text>
      </View>
      <SearchBar text={text} onChangeText={setText} />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={'#2177BF'} />
        </View>
      ) : (
        <FlatList
          data={filterList(data as User[])}
          renderItem={({item}) => <UserCard user={item} />}
          ListEmptyComponent={<EmptyList label="No users found" />}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};
