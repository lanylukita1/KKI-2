/*====================================
      Author: speakitnow
      Template: MERA Personal Portfolio Template
      Version: 1.0
  ======================================*/

(function ($) {
    "use strict";
    var mainAppNew = {

        main_fun: function () {

            /*=====================================
             THEME SWITCHER SCRIPTS 
            ===================================*/
            jQuery('#switch-panel').click(function () {
                if (jQuery(this).hasClass('show-panel')) {
                    jQuery('.switcher').css({ 'left': '-50px' });
                    jQuery('#switch-panel').removeClass('show-panel');
                    jQuery('#switch-panel').addClass('hide-panel');
                } else if (jQuery(this).hasClass('hide-panel')) {
                    jQuery('.switcher').css({ 'left': 0 });
                    jQuery('#switch-panel').removeClass('hide-panel');
                    jQuery('#switch-panel').addClass('show-panel');
                }
            });

            $('#pink').click(function () {
                $('#mainCSS').attr('href', '/stylesheets/theme/pink.css');
            });
            $('#cyan').click(function () {
                $('#mainCSS').attr('href', '/stylesheets/theme/cyan.css');
            });
            $('#blue').click(function () {
                $('#mainCSS').attr('href', '/stylesheets/theme/blue.css');
            });
            $('#brown').click(function () {
                $('#mainCSS').attr('href', '/stylesheets/theme/brown.css');
            });
            $('#white').click(function () {
                $('#mainCSS').attr('href', '/stylesheets/theme/white.css');
            });
          
        },

        initialization: function () {
            mainAppNew.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainAppNew.main_fun();
    });

}(jQuery));
