import {StyleSheet} from 'react-native';
import {scaleF} from '~helpers/metrics';

const styles = StyleSheet.create({
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
});

export default styles;
