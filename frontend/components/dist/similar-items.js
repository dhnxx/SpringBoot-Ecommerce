"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var badge_1 = require("@/components/ui/badge");
var card_1 = require("@/components/ui/card");
function SimilarItems(_a) {
    var similarProducts = _a.similarProducts;
    return (React.createElement("div", { className: "mt-12" },
        React.createElement("h2", { className: "mb-4 text-2xl font-bold" }, "Similar Items"),
        React.createElement("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4" }, similarProducts.map(function (product) { return (React.createElement(link_1["default"], { href: "/products/" + product.id, key: product.id },
            React.createElement(card_1.Card, { className: "transition-shadow hover:shadow-lg" },
                React.createElement(card_1.CardContent, { className: "p-4" },
                    React.createElement("div", { className: "relative mb-2 aspect-square" },
                        React.createElement(image_1["default"], { src: product.image, alt: product.name, fill: true, className: "rounded-md object-cover", unoptimized: true })),
                    React.createElement("h3", { className: "truncate font-semibold" }, product.name),
                    React.createElement("div", { className: "mt-2 flex items-center justify-between" },
                        React.createElement(badge_1.Badge, { variant: "secondary" }, product.category),
                        React.createElement("span", { className: "font-bold text-green-600" },
                            "$",
                            product.price.toFixed(2))))))); }))));
}
exports["default"] = SimilarItems;
