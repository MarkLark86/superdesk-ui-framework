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
exports.CheckboxButton = void 0;
var React = __importStar(require("react"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var CheckboxButton = /** @class */ (function (_super) {
    __extends(CheckboxButton, _super);
    function CheckboxButton(props) {
        var _this = _super.call(this, props) || this;
        _this.htmlId = react_id_generator_1.default();
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    CheckboxButton.prototype.handleChange = function () {
        if (this.props.disabled) {
            return;
        }
        this.props.onChange(!this.props.checked);
    };
    CheckboxButton.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("input", { type: 'checkbox', className: 'visuallyhidden', id: this.htmlId }),
            React.createElement("span", { className: 'sd-check-button' +
                    (this.props.disabled ? ' sd-check-new--disabled' :
                        (this.props.checked ? ' checked' : '')), onClick: this.handleChange },
                this.props.icon ? React.createElement("i", { className: "icon-" + this.props.icon }) : null,
                this.props.disabled ?
                    (React.createElement("label", { className: 'sd-check-button__text-label sd-label--disabled ' + (this.props.iconOnly ? 'visuallyhidden' : ''), "aria-label": this.props.iconOnly ? this.props.label : '', htmlFor: this.htmlId }, !this.props.iconOnly ? this.props.label : null)) :
                    (React.createElement("label", { className: 'sd-check-button__text-label ' + (this.props.iconOnly ? 'visuallyhidden' : ''), "aria-label": this.props.iconOnly ? this.props.label : '', htmlFor: this.htmlId }, !this.props.iconOnly ? this.props.label : null)))));
    };
    return CheckboxButton;
}(React.PureComponent));
exports.CheckboxButton = CheckboxButton;
