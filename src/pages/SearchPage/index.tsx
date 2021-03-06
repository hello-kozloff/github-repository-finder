import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { block } from 'bem-cn';
import {
  Navigation,
  RepositoryCard,
  RecentSearch,
  RepositoriesGrid,
  SectionHeader,
  SectionWrapper
} from '../../components';
import SearchForm from '../../forms/SearchForm';
import { IProps, IState } from './types';
import { IRepository } from '../../redux/types/repository';

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

    const title = isLoading ? 'Идет загрузка' : `Найдено по запросу ${query}:`;

    return (
      <div className={styleSheet()}>

        <Helmet>
          <title>Github Finder / Поиск</title>
        </Helmet>

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

          {items.length ? (
            <div className={styleSheet('search')}>
              <SectionWrapper>
                <SectionHeader title={title}>
                  <RepositoriesGrid>
                    {items.map((item: IRepository) => (
                      <RepositoryCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        full_name={item.full_name}
                        description={item.description}
                        html_url={item.html_url}
                        owner={{
                          id: item.owner.id,
                          login: item.owner.login,
                          avatar_url: item.owner.avatar_url
                        }}
                      />
                    ))}
                  </RepositoriesGrid>
                </SectionHeader>
              </SectionWrapper>
            </div>
          ) : null}

          <div className={styleSheet('recent-search')}>
            <SectionWrapper>
              <RecentSearch />
            </SectionWrapper>
          </div>

        </div>
      </div>
    );
  }
}

export default SearchPage;
