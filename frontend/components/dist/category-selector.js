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
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var button_1 = require("@/components/ui/button");
var scroll_area_1 = require("@/components/ui/scroll-area");
var helper_1 = require("@/lib/helper");
function CategorySelector() {
    var _this = this;
    var _a = react_1.useState([]), categories = _a[0], setCategories = _a[1];
    react_1.useEffect(function () {
        var fetchCategories = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/api/categories")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        setCategories(__spreadArrays([{ id: 0, name: "All Products" }], data));
                        return [2 /*return*/];
                }
            });
        }); };
        fetchCategories();
    }, []);
    var router = navigation_1.useRouter();
    var searchParams = navigation_1.useSearchParams();
    var _b = react_1.useState(searchParams.get("category") || "All Products"), selectedCategory = _b[0], setSelectedCategory = _b[1];
    react_1.useEffect(function () {
        setSelectedCategory(searchParams.get("category") || "All Products");
    }, [searchParams]);
    var handleCategoryChange = function (category) {
        var params = new URLSearchParams(searchParams);
        if (category === "All Products") {
            params["delete"]("category");
        }
        else {
            params.set("category", category);
        }
        params.set("page", "1");
        router.push("/products?" + params.toString());
    };
    return (React.createElement(scroll_area_1.ScrollArea, { className: "static h-[calc(100vh-200px)] pr-4" },
        React.createElement("div", { className: "space-y-2" },
            React.createElement("h2", { className: "mb-4 text-xl font-semibold" }, "Categories"),
            categories.map(function (category) { return (React.createElement(button_1.Button, { key: category.id, variant: selectedCategory === category.name ? "default" : "ghost", className: "w-full justify-start", onClick: function () { return handleCategoryChange(category.name); } }, helper_1.toTitleCase(category.name))); }))));
}
exports["default"] = CategorySelector;
