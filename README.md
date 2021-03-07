# react-helmet with react-snap:

1 - instaluejsz react-helmet
2 - robisz HelmetDecorator czy inny wrapper, jest to komponent który za pomocą react-helmet ustawi odpowiednie meta tagi
3 - u każdym roucie importujesz ten decorator i w propach podajesz mu tagi i ich zawartosć
4 - WAŻNE: w public/index.html MUSISZ NADAĆ ATRYBUT data-react-helpet="true" DO KAŻDEGO TAGU KTÓRY MA BYĆ PODMIENIONY DZIEKI react-helmet aby to działało. Oprócz tego dany meta tag który ma byc podmieniany i ma ten attrybut MUSI BYĆ TAKIEM ZAMKNIĘTYM czyli musi byc <tag />

// problem z helmet'em jest taki że to podmienia tagi ale z użyciem JavaScirpt więc jak np udostępnisz link komuś do podstrony to JavaScript się nie uruchomi więc nie zaczyta zmienionych meta tagów. Problem ten rozwiązuje albo SSR albo react-snap

5 - yarn add react-snap
6 - nie używasz już ReactDOM.render() tylko zamiast tego korzystasz z funkcji hydrate z biblioteki react-dom w pliku index.js :
7 - zmieniasz plik package.json gdzie dodajesz nowy script "postbuild": "react-snap" . Jak wtedy uruchomisz komendę yarn build to najpierw zrobi się zwykły build a potem wykona się react-snap który przeleci wszystkie routy i zrobi z dla nich osobne pliki ndex.html które będą miały osobne meta tagi utworzone na podstawie react-helmet

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// link do playlisty kanału gdzie znalazłem te informacje:
// https://www.youtube.com/watch?v=PjpPJfolInU&list=PLNkfllcUq3AkdeD4Aqp_Z2AIGyyF00_d8&index=140

`Wszystko jest też opisane w src/index.js`

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
