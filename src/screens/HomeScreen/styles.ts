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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
