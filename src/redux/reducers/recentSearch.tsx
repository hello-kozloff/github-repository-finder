import { IState, RecentSearchTypes } from '../types/recentSearch';
import * as constants from '../constants/recentSearch';

const initialState: IState = {
  repositories: []
};

// eslint-disable-next-line max-len
export default function recentSearchReducer(state = initialState, action: RecentSearchTypes) {
  switch (action.type) {
    case constants.ADD_REPOSITORY: {
      return {
        ...state,
        repositories: state.repositories.push(action.repository)
      };
    }

    default:
      return state;
  }
}
