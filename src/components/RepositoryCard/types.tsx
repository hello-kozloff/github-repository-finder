import { IRepository } from '../../redux/types/repository';

export interface IProps extends IRepository {

  /**
   |--------------------------------------------------------------------------
   | Add repository in Recent Search. (React redux)
   |--------------------------------------------------------------------------
   */
  addRepository: (repository: IRepository) => void;

}