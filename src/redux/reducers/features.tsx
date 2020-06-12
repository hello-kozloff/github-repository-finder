import { IState, FeaturesTypes } from '../types/features';
import IStore from '../types/store';
import * as constants from '../constants/features';

const initialState: IState = {
  repositories: []
};

// eslint-disable-next-line max-len
export default function featuresReducer(state = initialState, action: FeaturesTypes) {
  switch (action.type) {
    case constants.ADD_FEATURE_REPOSITORY: {
      return {
        ...state,
        repositories: [...state.repositories, action.repository]
      };
    }

    case constants.DELETE_FEATURE_REPOSITORY: {
      return {
        ...state,
        repositories: state.repositories.filter((repository) => {
          return repository.id === action.repositoryId;
        })
      };
    }

    default:
      return state;
  }
}

export const getFeaturesState = (store: IStore) => store.features;