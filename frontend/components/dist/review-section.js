"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var avatar_1 = require("@/components/ui/avatar");
var card_1 = require("@/components/ui/card");
var lucide_react_1 = require("lucide-react");
var helper_1 = require("@/lib/helper");
function ReviewSection(_a) {
    var reviews = _a.reviews;
    return (React.createElement(card_1.Card, null,
        React.createElement(card_1.CardHeader, null,
            React.createElement(card_1.CardTitle, null, "Customer Reviews")),
        React.createElement(card_1.CardContent, null,
            React.createElement("div", { className: "space-y-6" }, reviews.map(function (review) {
                var _a, _b;
                return (React.createElement("div", { key: review.id, className: "flex items-start space-x-4" },
                    React.createElement(avatar_1.Avatar, null,
                        review.avatarUrl && (React.createElement(avatar_1.AvatarImage, { src: review.avatarUrl, alt: review.author })),
                        React.createElement(avatar_1.AvatarFallback, null, review.author ? review.author[0] : "?")),
                    React.createElement("div", { className: "flex-1 space-y-2" },
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement("span", { className: "mr-2 font-semibold" }, helper_1.toFullName((_a = review.firstName) !== null && _a !== void 0 ? _a : "", (_b = review.lastName) !== null && _b !== void 0 ? _b : "")),
                            React.createElement("div", { className: "flex items-center space-x-1" },
                                __spreadArrays(Array(5)).map(function (_, index) { return (React.createElement(lucide_react_1.Star, { key: index, className: "h-4 w-4 " + (index < review.rating
                                        ? "fill-current text-yellow-400"
                                        : "text-gray-300"), "aria-hidden": "true" })); }),
                                React.createElement("span", { className: "sr-only" },
                                    review.rating,
                                    " out of 5 stars"))),
                        React.createElement("p", { className: "text-sm text-gray-600" }, review.comment))));
            })))));
}
exports["default"] = ReviewSection;
