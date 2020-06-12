import { ADD_REPOSITORY } from '../constants/recentSearch';
import { IRepository } from './repository';

export interface IState {
  repositories: Array<IRepository>
}

export interface IAddRepository {
  type: typeof ADD_REPOSITORY,
  repository: IRepository
}

export type RecentSearchTypes = IAddRepository;