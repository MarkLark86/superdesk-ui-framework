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
exports.Option = exports.Select = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        _this.htmlId = react_id_generator_1.default();
        _this.state = {
            value: (_a = _this.props.value) !== null && _a !== void 0 ? _a : '',
            invalid: (_b = _this.props.invalid) !== null && _b !== void 0 ? _b : false,
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    Select.prototype.handleChange = function (event) {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
    };
    Select.prototype.render = function () {
        var classes = classnames_1.default('sd-input sd-input--is-select', {
            'sd-input--inline-label': this.props.inlineLabel,
            'sd-input--required': this.props.required,
            'sd-input--disabled': this.props.disabled,
            'sd-input--invalid': this.props.invalid || this.state.invalid,
        });
        return (React.createElement("div", { className: classes },
            this.props.label ?
                React.createElement("label", { className: 'sd-input__label', htmlFor: this.htmlId }, this.props.label) : null,
            React.createElement("select", { className: 'sd-input__select', id: this.htmlId, value: this.state.value, "aria-label": this.props.label, "aria-describedby": this.htmlId, onChange: this.handleChange, disabled: this.props.disabled }, this.props.children),
            React.createElement("div", { className: 'sd-input__message-box' },
                this.props.info && !this.props.invalid && !this.state.invalid ?
                    React.createElement("div", { className: 'sd-input__hint' }, this.props.info) : null,
                this.props.invalid || this.state.invalid ?
                    React.createElement("div", { className: 'sd-input__message' }, this.props.error)
                    : null)));
    };
    return Select;
}(React.Component));
exports.Select = Select;
var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    function Option() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Option.prototype.render = function () {
        return (React.createElement("option", { value: this.props.value }, this.props.children));
    };
    return Option;
}(React.PureComponent));
exports.Option = Option;
