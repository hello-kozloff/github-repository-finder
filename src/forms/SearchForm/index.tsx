import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { IProps } from './types';
import { Input, PageHeader } from '../../components';

/**
 * Search Form
 * @constructor
 */
const SearchForm: FunctionComponent<IProps> = ({
  search
}: IProps) => {
  const [searchText, setSearchText] = useState(search || '');

  /**
   * The handle change input event.
   * @param event
   */
  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const {
      target: {
        value
      }
    } = event;

    setSearchText(value);
  }

  return (
    <PageHeader title="Поиск репозиториев GitHub" subtitle="Введите название репозитория">
      <Input
        variant="primary"
        value={searchText}
        placeholder="Введите название репозитория"
        onChange={handleChangeInput}
      />
    </PageHeader>
  );
};

export default SearchForm;