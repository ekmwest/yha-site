'use strict';

const Utils = {};

Utils.throttle = function (func, wait) {

    let timeout = null;
    let lastCallTimestamp = 0;

    const throttled = function () {

        let context = this;
        let args = arguments;
        let now = Date.now();
        let delay;

        // Too early?
        if ((lastCallTimestamp + wait) > now) {

            if (timeout) {
                clearTimeout(timeout);
                console.debug('Throttled', func.name);
            }

            delay = wait - (now - lastCallTimestamp);

            timeout = setTimeout(function () {
                lastCallTimestamp = Date.now();
                timeout = null;
                func.apply(context, args);
            }, delay);

        } else {

            lastCallTimestamp = Date.now();
            func.apply(context, args);
        }

    };

    return throttled;
};