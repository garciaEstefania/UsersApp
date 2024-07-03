import {useState} from 'react';
import {User} from '~redux/api/interfaces';

export const useFilterData = () => {
  const [text, setText] = useState('');

  /**
   * This function filters an array and returns an array with the matching values
   * @param list
   * @returns array
   */
  const filterList = (list: User[]): any[] => {
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
