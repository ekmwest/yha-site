'use strict';

(function () {

    const ClassName = {
        SCROLLED: 'SCROLLED'
    }

    let scrolled = false;

    document.addEventListener('scroll', Utils.throttle(function scrolledHandler(event) {

        if (scrollY === 0) {

            if (!scrolled) {
                return;
            }

            document.documentElement.classList.remove(ClassName.SCROLLED);
            scrolled = false;

        } else {

            if (scrolled) {
                return;
            }

            document.documentElement.classList.add(ClassName.SCROLLED);
            scrolled = true;
        }
    }, 100));

})();