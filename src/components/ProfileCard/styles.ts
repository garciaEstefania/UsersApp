import {StyleSheet} from 'react-native';
import {scaleF} from '~helpers/metrics';

const styles = StyleSheet.create({
  card: {
    width: scaleF(400),
    height: scaleF(600),
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: scaleF(20),
    paddingBottom: scaleF(20),
    paddingTop: scaleF(40),
    borderRadius: scaleF(20),
    backgroundColor: '#1679AB',
  },
  avatarContainer: {
    marginBottom: scaleF(20),
  },
  avatar: {
    width: scaleF(200),
    height: scaleF(200),
    borderRadius: scaleF(100),
    backgroundColor: '#57595D',
  },
  userName: {
    fontSize: scaleF(35),
    fontWeight: '500',
    color: '#fff',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: scaleF(15),
    fontWeight: '500',
    color: '#fff',
    marginRight: scaleF(5),
  },
  qrImage: {
    width: scaleF(200),
    height: scaleF(200),
    marginTop: scaleF(20),
  },
});

export default styles;
