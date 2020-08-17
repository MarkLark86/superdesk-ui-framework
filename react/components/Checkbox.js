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
exports.Checkbox = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = react_id_generator_1.default();
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleLabel = _this.handleLabel.bind(_this);
        return _this;
    }
    Checkbox.prototype.handleChange = function () {
        if (!this.props.disabled) {
            this.props.onChange(!this.props.checked);
        }
    };
    Checkbox.prototype.handleLabel = function (text) {
        var classes = classnames_1.default({
            'sd-label--disabled': this.props.disabled,
            'label--active': this.props.checked,
        });
        return React.createElement("label", { className: classes, htmlFor: this.htmlId, onClick: this.handleChange }, text);
    };
    Checkbox.prototype.render = function () {
        return (React.createElement("span", { className: 'sd-check-new__wrapper', "label-position": this.props.label ?
                (this.props.label.side === 'left' ? 'left' : null) : null },
            this.props.label ? (this.props.label.side === 'left' ?
                this.handleLabel(this.props.label.text) : null) : null,
            React.createElement("input", { type: 'checkbox', className: 'visuallyhidden', id: this.htmlId }),
            React.createElement("span", { className: 'sd-check-new' +
                    (this.props.disabled ? (this.props.checked ? ' sd-check-new--disabled checked' : ' sd-check-new--disabled') :
                        (this.props.checked ? ' checked' : '')), onClick: this.handleChange, "aria-label": String(this.props.checked) }),
            this.props.label ? (!this.props.label.side ? this.handleLabel(this.props.label.text) : null) : null));
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
