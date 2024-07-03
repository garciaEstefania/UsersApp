import {StyleSheet} from 'react-native';
import {scaleF} from '~helpers/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: scaleF(20),
  },
  titleContainer: {
    paddingHorizontal: scaleF(10),
    paddingVertical: scaleF(20),
  },
  titleScreen: {
    fontSize: scaleF(40),
    fontWeight: '500',
    color: '#000',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelEmptyList: {
    color: '#000',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: scaleF(100),
    paddingHorizontal: scaleF(20),
    paddingVertical: scaleF(20),
    margin: scaleF(10),
    borderRadius: scaleF(20),
    elevation: 6,
    backgroundColor: '#fff',
  },
  avatar: {
    width: scaleF(60),
    height: scaleF(60),
    borderRadius: scaleF(100),
    backgroundColor: '#57595D',
    marginRight: scaleF(20),
  },
  userName: {
    fontSize: scaleF(20),
    fontWeight: '500',
    color: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchBarContainer: {
    paddingHorizontal: scaleF(10),
    paddingVertical: scaleF(20),
  },
  searchBar: {
    height: scaleF(60),
    paddingHorizontal: scaleF(20),
    borderRadius: scaleF(20),
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
  },
});

export default styles;
