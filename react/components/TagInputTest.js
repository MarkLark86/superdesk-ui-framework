"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagInputTest = void 0;
var React = __importStar(require("react"));
var autocomplete_1 = require("primereact/autocomplete");
var TagInputTest = /** @class */ (function (_super) {
    __extends(TagInputTest, _super);
    function TagInputTest(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedItem: null,
            filteredItems: null,
        };
        _this.searchItem = _this.searchItem.bind(_this);
        _this.itemTemplate = _this.itemTemplate.bind(_this);
        _this.handleItem = _this.handleItem.bind(_this);
        return _this;
    }
    TagInputTest.prototype.searchItem = function (event) {
        var _this = this;
        setTimeout(function () {
            var filteredItems;
            if (!event.query.trim().length) {
                filteredItems = __spreadArrays(_this.props.items);
            }
            else {
                filteredItems = _this.props.items.filter(function (item) {
                    return item[_this.props.keyValue].toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            _this.setState({ filteredItems: filteredItems });
        }, 250);
    };
    TagInputTest.prototype.itemTemplate = function (item) {
        return (React.createElement("div", null,
            React.createElement("div", null, item[this.props.keyValue])));
    };
    TagInputTest.prototype.handleItem = function (e) {
        this.setState({ selectedItem: e.value });
    };
    TagInputTest.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(autocomplete_1.AutoComplete, { value: this.state.selectedItem, suggestions: this.state.filteredItems, completeMethod: this.searchItem, field: this.props.keyValue, multiple: true, dropdown: true, minLength: this.props.minLength ? this.props.minLength : 1, onChange: function (e) { return _this.handleItem(e); } })));
    };
    return TagInputTest;
}(React.Component));
exports.TagInputTest = TagInputTest;
