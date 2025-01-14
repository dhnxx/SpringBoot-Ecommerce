"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var ad_banner_1 = require("@/components/ad-banner");
var category_selector_1 = require("@/components/category-selector");
var product_grid_1 = require("@/components/product-grid");
var product_search_1 = require("@/components/product-search");
var product_sort_1 = require("@/components/product-sort");
exports.metadata = {
    title: "Eco-Friendly Products | EcoShop",
    description: "Browse our selection of sustainable and eco-friendly products"
};
function ProductsPage() {
    return (React.createElement("div", { className: "container mx-auto px-4 py-8" },
        React.createElement("div", { className: "grid grid-cols-1 gap-8 lg:grid-cols-4" },
            React.createElement("div", { className: "lg:col-span-1" },
                React.createElement(category_selector_1["default"], null)),
            React.createElement("div", { className: "lg:col-span-3" },
                React.createElement("div", { className: "mb-2 w-full" },
                    React.createElement(product_search_1["default"], null)),
                React.createElement(ad_banner_1["default"], null),
                React.createElement("div", { className: "mb-4 flex justify-end" },
                    React.createElement(product_sort_1["default"], null)),
                React.createElement(product_grid_1["default"], null)))));
}
exports["default"] = ProductsPage;
