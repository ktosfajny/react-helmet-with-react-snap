import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// yarn add react-helmet

// 1 - instaluejsz react-helmet
// 2 - robisz HelmetDecorator czy inny wrapper, jest to komponent który za pomocą react-helmet ustawi odpowiednie meta tagi
// 3 - u każdym roucie importujesz ten decorator i w propach podajesz mu tagi i ich zawartosć
// 4 - WAŻNE: w public/index.html MUSISZ NADAĆ ATRYBUT data-react-helpet="true" DO KAŻDEGO TAGU KTÓRY MA BYĆ PODMIENIONY DZIEKI react-helmet aby to działało. Oprócz tego dany meta tag który ma byc podmieniany i ma ten attrybut MUSI BYĆ TAKIEM ZAMKNIĘTYM czyli musi byc <tag />

// problem z helmet'em jest taki że to podmienia tagi ale z użyciem JavaScirpt więc jak np udostępnisz link komuś do podstrony to JavaScript się nie uruchomi więc nie zaczyta zmienionych meta tagów. Problem ten rozwiązuje albo SSR albo react-snap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
