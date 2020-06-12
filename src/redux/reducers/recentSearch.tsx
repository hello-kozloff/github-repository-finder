import { IState, RecentSearchTypes } from '../types/recentSearch';
import IStore from '../types/store';
import * as constants from '../constants/recentSearch';

const initialState: IState = {
  repositories: []
};

// eslint-disable-next-line max-len
export default function recentSearchReducer(state = initialState, action: RecentSearchTypes) {
  switch (action.type) {
    case constants.ADD_REPOSITORY: {
      const updatedRepositories = [...state.repositories, action.repository];

      if (updatedRepositories.length > 3) {
        updatedRepositories.shift();
      }

      return {
        ...state,
        repositories: updatedRepositories
      };
    }

    default:
      return state;
  }
}

export const getRecentSearchState = (store: IStore) => store.recentSearch;