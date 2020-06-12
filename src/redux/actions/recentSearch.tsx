import { RecentSearchTypes } from '../types/recentSearch';
import { IRepository } from '../types/repository';
import { ADD_REPOSITORY } from '../constants/recentSearch';

export function addRepository(repository: IRepository): RecentSearchTypes {
  return {
    type: ADD_REPOSITORY,
    repository
  };
}