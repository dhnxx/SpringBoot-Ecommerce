"use client";
"use strict";
exports.__esModule = true;
var button_1 = require("@/components/ui/button");
var lucide_react_1 = require("lucide-react");
function Pagination(_a) {
    var currentPage = _a.currentPage, totalPages = _a.totalPages, onPageChange = _a.onPageChange;
    var handlePrevious = function () {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };
    var handleNext = function () {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    return (React.createElement("div", { className: "flex items-center justify-center gap-2 mt-8" },
        React.createElement(button_1.Button, { variant: "outline", size: "sm", onClick: handlePrevious, disabled: currentPage === 1 },
            React.createElement(lucide_react_1.ChevronLeft, { className: "h-4 w-4" })),
        Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (page) { return (React.createElement(button_1.Button, { key: page, variant: currentPage === page ? "default" : "outline", size: "sm", onClick: function () { return onPageChange(page); } }, page)); }),
        React.createElement(button_1.Button, { variant: "outline", size: "sm", onClick: handleNext, disabled: currentPage === totalPages },
            React.createElement(lucide_react_1.ChevronRight, { className: "h-4 w-4" }))));
}
exports["default"] = Pagination;
