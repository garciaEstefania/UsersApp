import {StyleSheet} from 'react-native';
import {scaleF} from '~helpers/metrics';

const styles = StyleSheet.create({
  searchBarContainer: {
    // flexDirection: 'row',
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
  icon: {
    position: 'absolute',
    top: scaleF(38),
    right: scaleF(25),
  },
});

export default styles;
