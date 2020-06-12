import * as constants from '../constants/features';
import { IRepository } from './repository';

export interface IState {
  repositories: Array<IRepository>
}

export interface IAddFeatureRepository {
  type: typeof constants.ADD_FEATURE_REPOSITORY,
  repository: IRepository
}

export interface IDeleteFeatureRepository {
  type: typeof constants.DELETE_FEATURE_REPOSITORY,
  repositoryId: IRepository['id']
}

export type FeaturesTypes = IAddFeatureRepository | IDeleteFeatureRepository;