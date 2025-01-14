"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var badge_1 = require("@/components/ui/badge");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var lucide_react_1 = require("lucide-react");
var helper_1 = require("@/lib/helper");
function ProductDetails(_a) {
    var product = _a.product;
    var _b = react_1.useState(1), quantity = _b[0], setQuantity = _b[1];
    var _c = react_1.useState(0), currentImage = _c[0], setCurrentImage = _c[1];
    var incrementQuantity = function () { return setQuantity(function (q) { return q + 1; }); };
    var decrementQuantity = function () { return setQuantity(function (q) { return Math.max(1, q - 1); }); };
    var handleAddToCart = function () {
        console.log("Added " + quantity + " " + product.name + "(s) to cart");
    };
    return (React.createElement(card_1.Card, { className: "overflow-hidden" },
        React.createElement(card_1.CardContent, { className: "p-6" },
            React.createElement("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2" },
                React.createElement("div", { className: "space-y-4" },
                    React.createElement("div", { className: "relative w-full h-80 overflow-hidden rounded-lg" },
                        React.createElement(image_1["default"], { src: product.images[currentImage], alt: product.name, layout: "responsive", width: 640, height: 640, className: "object-cover", unoptimized: true })),
                    React.createElement("div", { className: "flex space-x-2 overflow-x-auto" }, product.images.map(function (img, index) { return (React.createElement("button", { key: index, className: "relative h-20 w-20 overflow-hidden rounded-md " + (index === currentImage ? "ring-2 ring-primary" : ""), onClick: function () { return setCurrentImage(index); } },
                        React.createElement(image_1["default"], { src: img, alt: product.name + " thumbnail " + (index + 1), layout: "fill", className: "object-cover", unoptimized: true }))); }))),
                React.createElement("div", { className: "space-y-4" },
                    React.createElement("h1", { className: "text-3xl font-bold" }, product.name),
                    React.createElement(badge_1.Badge, { variant: "secondary" }, helper_1.toTitleCase(product.category)),
                    React.createElement("p", { className: "text-xl font-semibold text-green-600" },
                        "$",
                        product.price.toFixed(2)),
                    React.createElement("p", { className: "text-gray-600" }, product.description),
                    React.createElement("div", { className: "flex items-center space-x-4" },
                        React.createElement(button_1.Button, { variant: "outline", size: "icon", onClick: decrementQuantity },
                            React.createElement(lucide_react_1.Minus, { className: "h-4 w-4" })),
                        React.createElement("span", { className: "text-xl font-semibold" }, quantity),
                        React.createElement(button_1.Button, { variant: "outline", size: "icon", onClick: incrementQuantity },
                            React.createElement(lucide_react_1.Plus, { className: "h-4 w-4" }))),
                    React.createElement(button_1.Button, { className: "w-full", onClick: handleAddToCart },
                        React.createElement(lucide_react_1.ShoppingCart, { className: "mr-2 h-4 w-4" }),
                        " Add to Cart"))))));
}
exports["default"] = ProductDetails;
