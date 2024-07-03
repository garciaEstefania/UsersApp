import {StackScreenProps} from '@react-navigation/stack';
import {User} from '~redux/api/interfaces';

export type RootStackParamList = {
  Home: undefined;
  Profile: {user: User};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
