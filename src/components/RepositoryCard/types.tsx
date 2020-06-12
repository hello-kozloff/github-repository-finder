import { IRepository } from '../../redux/types/repository';

export interface IProps extends IRepository {

  /**
   |--------------------------------------------------------------------------
   | Add repository in Recent Search. (React Redux)
   |--------------------------------------------------------------------------
   */
  addRepository: (repository: IRepository) => void;

  /**
   |--------------------------------------------------------------------------
   | Add feature repository in Recent Search. (React Redux)
   |--------------------------------------------------------------------------
   */
  addFeatureRepository: (repository: IRepository) => void;

}