// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBoRHouSlTSPXIg61fhZewADCBjD1EkY6g",
    authDomain: "recipeblog-1aa2d.firebaseapp.com",
    databaseURL: "https://recipeblog-1aa2d.firebaseio.com",
    projectId: "recipeblog-1aa2d",
    storageBucket: "recipeblog-1aa2d.appspot.com",
    messagingSenderId: "561103431567"
  }
};
