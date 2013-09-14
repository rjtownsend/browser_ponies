/**
 * @file
 * A JavaScript file for the module.
 */
(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.browser_ponies = {
  attach: function(context, settings) {

    //check to make sure that the browser can handle window.addEventListener
    if (window.addEventListener) {
      // create the keys and konami variables
      var keys = [],
          konami = "38,38,40,40,37,39,37,39,66,65";
      
      // bind the keydown event to the Konami function
      window.addEventListener("keydown", function(e){
        // push the keycode to the 'keys' array
        keys.push(e.keyCode);

        // and check to see if the user has entered the Konami code
        if (keys.toString().indexOf(konami) >= 0) {
          // Load the ponies!
          (function (browerPoniesGo) {
            BrowserPonies.setBaseUrl(Drupal.settings.browser_ponies.baseurl);
            BrowserPonies.loadConfig(BrowserPoniesBaseConfig);
            BrowserPonies.loadConfig(browerPoniesGo);
          })
          (Drupal.settings.browser_ponies);

          // and finally clean up the keys array
          keys = [];
          };
      }, true);
    };

  }
};

})(jQuery, Drupal, this, this.document);
