export interface IRepositoryOwner {

  /**
   |--------------------------------------------------------------------------
   | Id. (Required)
   |--------------------------------------------------------------------------
   */
  id: number;

  /**
   |--------------------------------------------------------------------------
   | Login. (Required)
   |--------------------------------------------------------------------------
   */
  login: string;

  /**
   |--------------------------------------------------------------------------
   | Avatar url. (Not required)
   |--------------------------------------------------------------------------
   */
  avatar_url?: string;

}

export interface IRepository {

  /**
   |--------------------------------------------------------------------------
   | Id. (Required)
   |--------------------------------------------------------------------------
   */
  id: number;

  /**
   |--------------------------------------------------------------------------
   | Name. (Required)
   |--------------------------------------------------------------------------
   */
  name: string;

  /**
   |--------------------------------------------------------------------------
   | Full name. (Required)
   |--------------------------------------------------------------------------
   */
  fullName: string;

  /**
   |--------------------------------------------------------------------------
   | Description. (Not required)
   |--------------------------------------------------------------------------
   */
  description?: string;

  /**
   |--------------------------------------------------------------------------
   | Url. (Required)
   |--------------------------------------------------------------------------
   */
  html_url: string;

  /**
   |--------------------------------------------------------------------------
   | Owner. (Required)
   |--------------------------------------------------------------------------
   */
  owner: IRepositoryOwner;

}

export interface IProps {

  /**
   |--------------------------------------------------------------------------
   | Url. (Required)
   |--------------------------------------------------------------------------
   */
  html_url: string;

  /**
   |--------------------------------------------------------------------------
   | Name. (Required)
   |--------------------------------------------------------------------------
   */
  name: IRepository['name'];

  /**
   |--------------------------------------------------------------------------
   | Description. (Not required)
   |--------------------------------------------------------------------------
   */
  description?: IRepository['description'];

  /**
   |--------------------------------------------------------------------------
   | Owner. (Required)
   |--------------------------------------------------------------------------
   */
  owner: IRepository['owner'];

}