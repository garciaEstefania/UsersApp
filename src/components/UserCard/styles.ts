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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles;
