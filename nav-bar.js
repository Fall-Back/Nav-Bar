/*!
    Fall-Back Nav-Bar v2.0.0
    https://github.com/Fall-Back/Nav-Bar
    Copyright (c) 2017, Andy Kirk
    Released under the MIT license https://git.io/vwTVl
*/
(function() {
    var ready = function(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

	var navbar = {

        init: function() {
            var nav_bar = document.querySelector('.nav-bar');
            var nav_bar_js_classname = 'js-nav-bar';
            // Note that `getComputedStyle` on psuedo elements doesn't work in Opera Mini, but in
            // this case I'm happy to serve only the unenhanced version to Opera Mini.
            var css_is_loaded = (
                window.getComputedStyle(nav_bar, ':before')
                .getPropertyValue('content')
                .replace(/(\"|\')/g, '')
                == 'CSS Loaded'
            );
            //console.log(window.getComputedStyle(nav_bar, ':before').getPropertyValue('content'));
            //console.log(css_is_loaded);

            if (css_is_loaded) {
                // Add the JS class names ...
                if (nav_bar.classList) {
                    nav_bar.classList.add(nav_bar_js_classname);
                } else {
                    nav_bar.className += ' ' + nav_bar_js_classname;
                }
                // ... and button actions:
                // (note a dilema here, as the toggle button code is designed to be generic, but I
                // don't want to run it for ALL `.js-toggle-button` by default, because I'm being
                // more discerning than that. I.e. I NEVER want this running for Opera Mini, and I
                // ONLY want it running for Nav-Bars if the Nav-Bar CSS has loaded.
                // Maybe just abstract the toggle code into a standalone file, and make it callable
                // and act upon a selector that's passed to it).
                var buttons = document.querySelectorAll('.js-nav-bar .js-toggle-button');
                Array.prototype.forEach.call(buttons, function(button, i) {
                    var button_id = button.getAttribute('id');

                    button.setAttribute('aria-expanded', 'false');

                    // Main toggle button:
                    button.addEventListener('click', function() {
                        // Switch the `aria-expanded` attribute:
                        var expanded = this.getAttribute('aria-expanded') === 'true' || false;

                        // Close any open submenu:
                        var expanded_buttons = document.querySelectorAll('.js-nav-bar .js-toggle-button[aria-expanded="true"]');
                        Array.prototype.forEach.call(expanded_buttons, function(expanded_button, i) {
                            expanded_button.setAttribute('aria-expanded', 'false');
                        });

                        // Set the attribute:
                        this.setAttribute('aria-expanded', !expanded);

                        // Set the focus to the first link if submenu newly opened:
                        if (!expanded) {
                            var first_link = document.querySelector('#' + button_id + '--target .subnav__link');
                            first_link.focus();
                        }
                    });

                });
            }
        }
	}

	ready(navbar.init);
})();
