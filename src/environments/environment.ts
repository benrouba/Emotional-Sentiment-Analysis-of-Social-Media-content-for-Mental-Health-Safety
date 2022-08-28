// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: any = {
  production: false,
  twitterUrl: "",
  bearer: '',
  oauth_consumer_key:"",
  oauth_consumer_secret:'',
  oauth_token:"",
  oauth_token_secret:'',
  oauth_signature_method:"",
  oauth_timestamp:"",
  oauth_nonce:"",
  oauth_version:"",
  oauth_signature:"",
  user_id:"", //user id of the twitter account
  screen_name:"", //the screen name of the user realDonaldTrump as an example 
  place_id:''// it is The numeric value that represents the location from where to return trending information for from, you can get your place_id by endpoint 'https://developer.twitter.com/en/docs/twitter-api/v1/trends/locations-with-trending-topics/api-reference/get-trends-available'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
