import {useState} from 'react';
import {User} from '~redux/api/interfaces';

export const useFilterData = () => {
  const [text, setText] = useState('');

  const filterList = (list: User[]) => {
    return list?.filter((listItem: User) =>
      listItem.login.toLowerCase().includes(text.toLowerCase()),
    );
  };

  return {
    filterList,
    text,
    setText,
  };
};
