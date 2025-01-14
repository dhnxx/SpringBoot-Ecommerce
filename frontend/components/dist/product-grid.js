"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var link_1 = require("next/link");
var badge_1 = require("@/components/ui/badge");
var card_1 = require("@/components/ui/card");
var helper_1 = require("@/lib/helper");
var react_1 = require("react");
var navigation_2 = require("next/navigation");
var pagination_1 = require("./pagination");
var ITEMS_PER_PAGE = 6;
function ProductGrid() {
    var _this = this;
    var _a;
    var _b = react_1.useState([]), products = _b[0], setProducts = _b[1];
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var searchParams = navigation_1.useSearchParams();
    var router = navigation_2.useRouter();
    var query = (_a = searchParams.get("q")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var category = searchParams.get("category");
    var sort = searchParams.get("sort") || "name_asc";
    var page = Number(searchParams.get("page")) || 1;
    react_1.useEffect(function () {
        var fetchProducts = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsLoading(true);
                        return [4 /*yield*/, fetch("/api/products")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setProducts(data);
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchProducts();
    }, []);
    // Handle undefined or empty products
    if (!products || products.length === 0) {
        return (React.createElement("p", { className: "col-span-full mt-8 text-center text-gray-500" }, "No products available."));
    }
    var filteredProducts = products.filter(function (product) {
        var matchesQuery = query
            ? product.name.toLowerCase().includes(query)
            : true;
        var matchesCategory = category && category !== "All Products"
            ? product.category === category
            : true;
        return matchesQuery && matchesCategory;
    });
    var sortedProducts = __spreadArrays(filteredProducts).sort(function (a, b) {
        switch (sort) {
            case "name_asc":
                return a.name.localeCompare(b.name);
            case "name_desc":
                return b.name.localeCompare(a.name);
            case "price_asc":
                return a.price - b.price;
            case "price_desc":
                return b.price - a.price;
            default:
                return 0;
        }
    });
    // Calculate total pages
    var totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
    var handlePageChange = function (newPage) {
        var params = new URLSearchParams(searchParams);
        params.set("page", newPage.toString());
        router.push("?" + params.toString());
    };
    var paginatedProducts = sortedProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" },
            paginatedProducts.map(function (product) { return (React.createElement(link_1["default"], { key: product.id, href: "/products/" + product.id, passHref: true },
                React.createElement(card_1.Card, { className: "flex flex-col cursor-pointer hover:shadow-lg transition-shadow" },
                    React.createElement(card_1.CardContent, { className: "p-4" },
                        React.createElement(image_1["default"], { src: product.image, alt: product.name, width: 200, height: 200, className: "mb-4 h-48 w-full rounded-md object-cover", unoptimized: true, onError: function (e) {
                                e.currentTarget.src = "https://placecats.com/300/200";
                                e.currentTarget.onerror = null;
                            } }),
                        React.createElement("h2", { className: "mb-2 text-lg font-semibold" }, product.name),
                        React.createElement(badge_1.Badge, { variant: "secondary", className: "mb-2" }, helper_1.toTitleCase(product.category)),
                        React.createElement("p", { className: "font-bold text-green-600" },
                            "$",
                            product.price.toFixed(2)))))); }),
            paginatedProducts.length === 0 && (React.createElement("p", { className: "col-span-full mt-8 text-center text-gray-500" }, "No products found. Try a different search term or category."))),
        React.createElement(pagination_1["default"], { currentPage: page, totalPages: totalPages, onPageChange: handlePageChange })));
}
exports["default"] = ProductGrid;
