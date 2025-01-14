"use strict";
exports.__esModule = true;
exports.toFullName = exports.toTitleCase = void 0;
exports.toTitleCase = function (str) {
    return str
        .toLowerCase()
        .split(/[\s-]+/) // Split by spaces or hyphens
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(" ");
};
exports.toFullName = function (firstName, lastName) {
    return firstName + " " + lastName;
};
