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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autocomplete = void 0;
var React = __importStar(require("react"));
var autocomplete_1 = require("primereact/autocomplete");
var classnames_1 = __importDefault(require("classnames"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        _this.htmlId = react_id_generator_1.default();
        _this.state = {
            selectedItem: null,
            filteredItems: null,
            invalid: (_a = _this.props.invalid) !== null && _a !== void 0 ? _a : false,
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
                    if (_this.props.keyValue) {
                        return item[_this.props.keyValue].toLowerCase().startsWith(event.query.toLowerCase());
                    }
                    return item.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            _this.setState({ filteredItems: filteredItems });
        }, 250);
    };
    Autocomplete.prototype.itemTemplate = function (item) {
        return (React.createElement("div", null,
            React.createElement("div", null, this.props.keyValue ? item[this.props.keyValue] : item)));
    };
    Autocomplete.prototype.handleChange = function (event) {
        this.setState({ selectedItem: event.value });
        this.props.onChange(event.value);
    };
    Autocomplete.prototype.render = function () {
        var _this = this;
        var classes = classnames_1.default('sd-input', {
            'sd-input--inline-label': this.props.inlineLabel,
            'sd-input--required': this.props.required,
            'sd-input--disabled': this.props.disabled,
            'sd-input--invalid': this.props.invalid || this.state.invalid,
        });
        return (React.createElement("div", { className: classes },
            this.props.label ? React.createElement("label", { className: 'sd-input__label', htmlFor: this.htmlId }, this.props.label) : null,
            React.createElement(autocomplete_1.AutoComplete, { id: this.htmlId, inputClassName: 'sd-input__input', value: this.state.selectedItem, suggestions: this.state.filteredItems, completeMethod: this.searchItem, field: this.props.keyValue, disabled: this.props.disabled, minLength: this.props.minLength ? this.props.minLength : 1, onChange: function (event) { return _this.handleChange(event); } }),
            React.createElement("div", { className: 'sd-input__message-box' },
                this.props.info && !this.props.invalid && !this.state.invalid ?
                    React.createElement("div", { className: 'sd-input__hint' }, this.props.info) : null,
                this.props.invalid || this.state.invalid ?
                    React.createElement("div", { className: 'sd-input__message' }, this.props.error)
                    : null)));
    };
    return Autocomplete;
}(React.Component));
exports.Autocomplete = Autocomplete;
