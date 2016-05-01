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

  var app = document.querySelector('#app');
  
  // Sets app default base URL
  app.baseUrl = '/';
  
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    var pages = Polymer.dom(document).querySelector("#pages"),
        youTubePlayer = Polymer.dom(document).querySelector("google-youtube")
    
    // listen for change of video id: declared in index.html 'on-iron-select="selectedVideoIdChanged"'
    app.selectedVideoIdChanged = function(e, detail) {
      page('/view/' + detail.item.getAttribute('video-id'));
    }
    // listen for user to search and switch context when necessary
    Polymer.dom(document).querySelector("youtube-search-input").addEventListener('input', function(detail){
      if (location.pathname === '/') return;
      page('/');
    });
  });
  
  // Scroll page to top
  app.scrollPageToTop = function() {
    app.$.headerPanelMain.scrollToTop(true);
  };
})(document);
