import React, { Component } from 'react';
import { block } from 'bem-cn';
import { IProps, IState } from './types';
import './index.scss';

import SearchForm from '../../forms/SearchForm';
import { Navigation, RepositoryCard } from '../../components';
import { IRepository } from '../../components/RepositoryCard/types';

/**
 * Search Page
 */
class SearchPage extends Component<IProps, IState> {
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

    if (query !== null) {
      this.setState({
        isLoading: true
      });

      fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response.items);
          this.setState({
            isLoading: false,
            items: response.items
          });
        })
        .catch((error) => {
          console.log(error);

          this.setState({
            isLoading: false
          });
        });
    }
  }

  render() {
    const { location } = this.props;
    const { isLoading, items } = this.state;

    const query = new URLSearchParams(location.search).get('q');
    const styleSheet = block('search-page');

    console.log('loading', isLoading);
    console.log(items);

    return (
      <div className={styleSheet()}>

        <div className={styleSheet('navigation')}>
          <Navigation />
        </div>

        <div className={styleSheet('header')}>
          <SearchForm
            search={query && query || ''}
          />
        </div>

        <div className={styleSheet('content')}>

          <h2 className={styleSheet('title')}>
            Найдено по запросу '{query}':
          </h2>

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
    );
  }
}

export default SearchPage;
