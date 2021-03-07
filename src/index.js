import React from "react";
// import ReactDOM from "react-dom";

import App from "./App";

// yarn add react-helmet

// 1 - instaluejsz react-helmet
// 2 - robisz HelmetDecorator czy inny wrapper, jest to komponent który za pomocą react-helmet ustawi odpowiednie meta tagi
// 3 - u każdym roucie importujesz ten decorator i w propach podajesz mu tagi i ich zawartosć
// 4 - WAŻNE: w public/index.html MUSISZ NADAĆ ATRYBUT data-react-helpet="true" DO KAŻDEGO TAGU KTÓRY MA BYĆ PODMIENIONY DZIEKI react-helmet aby to działało. Oprócz tego dany meta tag który ma byc podmieniany i ma ten attrybut MUSI BYĆ TAKIEM ZAMKNIĘTYM czyli musi byc <tag />

// problem z helmet'em jest taki że to podmienia tagi ale z użyciem JavaScirpt więc jak np udostępnisz link komuś do podstrony to JavaScript się nie uruchomi więc nie zaczyta zmienionych meta tagów. Problem ten rozwiązuje albo SSR albo react-snap

// 5 - yarn add react-snap
// 6 - nie używasz już ReactDOM.render() tylko zamiast tego korzystasz z funkcji hydrate z biblioteki react-dom w pliku index.js :
// 7 - zmieniasz plik package.json gdzie dodajesz nowy script "postbuild": "react-snap" . Jak wtedy uruchomisz komendę yarn build to najpierw zrobi się zwykły build a potem wykona się react-snap który przeleci wszystkie routy i zrobi z dla nich osobne pliki ndex.html które będą miały osobne meta tagi utworzone na podstawie react-helmet

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// link do playlisty kanału gdzie znalazłem te informacje:
// https://www.youtube.com/watch?v=PjpPJfolInU&list=PLNkfllcUq3AkdeD4Aqp_Z2AIGyyF00_d8&index=140

import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

//  -------------------------------------------

//// poniższy kod już nie jest potrzebny bo zakotwiczamy cały kod JS do HTMLa przy użyciu innej metody

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
