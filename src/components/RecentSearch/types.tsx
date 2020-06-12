import { IRepository } from '../../redux/types/repository';

export interface IProps {

  /**
   |--------------------------------------------------------------------------
   | Repositories. (React Redux)
   |--------------------------------------------------------------------------
   */
  repositories: Array<IRepository>;
  
}