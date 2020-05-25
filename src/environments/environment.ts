// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FavoritePage } from 'src/app/favorite/favorite.page';

export const environment = {
  production: false,
  //NEWS_API_KEY:'127a40e55e504152b3f455620c47b341', 
  NEWS_API_KEY:'9cda9abbbc5c49e8842c3f2f1dd0ece5',
  NEWS_API_URL:'https://newsapi.org/v2',
  FAVORITE_KEY:'CUSTOM_FAVORITE'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
