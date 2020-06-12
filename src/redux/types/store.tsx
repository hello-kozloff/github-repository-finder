import { IState as IRecentSearchState } from './recentSearch';
import { IState as IFeaturesState } from './features';

export default interface IStore {
  recentSearch: IRecentSearchState,
  features: IFeaturesState
}