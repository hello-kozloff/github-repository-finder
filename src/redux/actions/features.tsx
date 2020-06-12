import { FeaturesTypes } from '../types/features';
import { IRepository } from '../types/repository';
import * as constants from '../constants/features';

export function addFeatureRepository(repository: IRepository): FeaturesTypes {
  return {
    type: constants.ADD_FEATURE_REPOSITORY,
    repository
  };
}

export function deleteFeatureRepository(repositoryId: IRepository['id']): FeaturesTypes {
  return {
    type: constants.DELETE_FEATURE_REPOSITORY,
    repositoryId
  };
}