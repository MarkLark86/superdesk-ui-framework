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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = react_id_generator_1.default();
        _this.handleLabel = _this.handleLabel.bind(_this);
        return _this;
    }
    Radio.prototype.handleChange = function (item) {
        if (!item.disabled) {
            this.props.onChange(item.value);
        }
    };
    Radio.prototype.handleLabel = function (item, index) {
        var _this = this;
        var classes = classnames_1.default({
            'sd-label--disabled': item.disabled,
            'label--active': this.props.value === item.value,
        });
        return React.createElement("label", { className: classes, onClick: function () { return _this.handleChange(item); }, htmlFor: this.htmlId + index }, item.label);
    };
    Radio.prototype.render = function () {
        var _this = this;
        return (this.props.options.map(function (item, index) { return (React.createElement("span", { className: 'sd-check-new__wrapper', key: index, "label-position": _this.props.labelSide === 'left' ? 'left' : null },
            _this.props.labelSide === 'left' ? _this.handleLabel(item, index) : null,
            React.createElement("input", { type: 'checkbox', className: 'visuallyhidden', id: _this.htmlId + index }),
            React.createElement("span", { className: 'sd-radio-new' +
                    (item.disabled ? ' sd-checkbox--disabled' :
                        (_this.props.value === item.value ? ' checked' : '')), onClick: function () { return _this.handleChange(item); } }),
            !_this.props.labelSide ? _this.handleLabel(item, index) : null)); }));
    };
    return Radio;
}(React.PureComponent));
exports.Radio = Radio;
