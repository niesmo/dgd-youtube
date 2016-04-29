/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    componentsLoadedHandler();
  });

  function componentsLoadedHandler(){
    // listen for the video id to set
    document.querySelector("youtube-search-results").addEventListener('video-selected', function(detail){
      document.querySelector("#pages").selected = "view";
    });

    // listen for user to search and switch context when necessary
    document.querySelector("youtube-search-input").addEventListener('input', function(detail){
      document.querySelector("#pages").selected = "search";

      // stop the video
      document.querySelector("google-youtube").pause();
    });
  }


})(document);
