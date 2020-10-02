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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
var react_1 = __importDefault(require("react"));
var autocomplete_1 = require("primereact/autocomplete");
var Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedItem: null,
            filteredItems: null,
        };
        _this.searchItem = _this.searchItem.bind(_this);
        _this.itemTemplate = _this.itemTemplate.bind(_this);
        return _this;
    }
    Autocomplete.prototype.searchItem = function (event) {
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
    Autocomplete.prototype.itemTemplate = function (item) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null, item[this.props.keyValue])));
    };
    Autocomplete.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(autocomplete_1.AutoComplete, { value: this.state.selectedItem, suggestions: this.state.filteredItems, completeMethod: this.searchItem, field: this.props.keyValue, minLength: this.props.minLength ? this.props.minLength : 1, onChange: function (e) { return _this.setState({ selectedItem: e.value }); } })));
    };
    return Autocomplete;
}(react_1.default.Component));
exports.Autocomplete = Autocomplete;
