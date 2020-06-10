import React, { PureComponent } from 'react';
import { block } from 'bem-cn';
import { IProps, IState } from './types';
import './index.scss';

import SearchForm from '../../forms/SearchForm';
import { Navigation, RepositoryCard } from '../../components';
import { IRepository } from '../../components/RepositoryCard/types';

/**
 * Search Page
 */
class SearchPage extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: false,
      items: []
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const query = new URLSearchParams(location.search).get('q');

    query && this.fetchQuery(query);
  }

  handleChangeForm = () => {
    const { isLoading } = this.state;

    this.setState({
      isLoading,
      items: []
    });
  };

  handleSubmitForm = (value: string) => {
    const { isLoading } = this.state;

    this.setState({
      isLoading,
      items: []
    });

    if (!isLoading) {
      this.fetchQuery(value);
    }
  };

  fetchQuery(query: string) {
    this.setState({
      isLoading: true
    });

    fetch(`https://api.github.com/search/repositories?q=${query}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.items.length === 0) {
          alert('Репозиторий с таким названием не найден!');
        }

        this.setState({
          isLoading: false,
          items: response.items
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const { location } = this.props;
    const { isLoading, items } = this.state;

    const query = new URLSearchParams(location.search).get('q');
    const styleSheet = block('search-page');

    return (
      <div className={styleSheet()}>

        <div className={styleSheet('navigation')}>
          <Navigation />
        </div>

        <div className={styleSheet('header')}>
          <SearchForm
            search={query && query || ''}
            onChange={this.handleChangeForm}
            onSubmit={this.handleSubmitForm}
            isLoading={isLoading}
          />
        </div>

        <div className={styleSheet('content')}>

          {items.length && (
            isLoading ? (
              <h2 className={styleSheet('title')}>
                Идет загрузка...
              </h2>
            ) : (
              <h2 className={styleSheet('title')}>
                Найдено по запросу '{query}':
              </h2>
            )
          ) || null}

          <div className={styleSheet('grid')}>
            {items.map((item: IRepository) => (
              <div key={item.id} className={styleSheet('card')}>
                <RepositoryCard
                  html_url={item.html_url}
                  name={item.name}
                  description={item.description}
                  owner={{
                    id: item.owner.id,
                    login: item.owner.login,
                    avatar_url: item.owner.avatar_url
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }
}

export default SearchPage;
