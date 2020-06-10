import React, {FunctionComponent, useState, ChangeEvent, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';
import { block } from 'bem-cn';
import { IProps } from './types';
import { PageHeader, Input, Button } from '../../components';
import './index.scss';

/**
 * Search Form
 * @constructor
 */
const SearchForm: FunctionComponent<IProps> = ({
  search,
  onChange
}: IProps) => {
  const history = useHistory();
  const [searchText, setSearchText] = useState(search || '');
  const styleSheet = block('search-form');

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

    history.push({
      pathname: '/search',
      search: `?q=${value}`
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (searchText.length > 0) {
      onChange(searchText);
    }
  }

  return (
    <PageHeader title="Поиск репозиториев GitHub" subtitle="Введите название репозитория">
      <form className={styleSheet()} onSubmit={handleSubmit}>

        <div className={styleSheet('input')}>
          <Input
            variant="primary"
            value={searchText}
            placeholder="Введите название репозитория"
            required
            onChange={handleChangeInput}
          />
        </div>

        <div className={styleSheet('submit')}>
          <Button type="submit">
            Показать
          </Button>
        </div>

      </form>
    </PageHeader>
  );
};

export default SearchForm;