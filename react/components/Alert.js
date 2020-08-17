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
exports.Alert = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            open: true,
        };
        _this.onToggle = _this.onToggle.bind(_this);
        return _this;
    }
    Alert.prototype.onToggle = function () {
        this.setState(function (state) { return ({
            open: !state.open,
        }); });
    };
    Alert.prototype.render = function () {
        var _a, _b;
        var classesAlert = classnames_1.default('sd-alert', (_a = {
                'sd-alert--hollow': this.props.style === 'hollow',
                'sd-alert--small': this.props.size === 'small'
            },
            _a["sd-alert--" + this.props.type] = this.props.type,
            _a['sd-alert--hidden'] = !this.state.open,
            _a));
        var classesInfoBtn = classnames_1.default('sd-alert__info-btn sd-shadow--z2', (_b = {},
            _b["sd-alert__info-btn--" + this.props.type] = this.props.type,
            _b['sd-alert__info-btn--hidden'] = this.state.open,
            _b));
        return (React.createElement("div", { className: 'sd-alert__container' },
            React.createElement("div", { className: classesAlert },
                this.props.restoreIcon ?
                    React.createElement("button", { className: 'sd-alert__close', onClick: this.onToggle, "aria-label": "Close" }) : null,
                this.props.children),
            this.props.restoreIcon ?
                React.createElement("span", { className: classesInfoBtn, onClick: this.onToggle },
                    React.createElement("i", { className: this.props.restoreIcon === 'help' ? 'icon-help-large' : 'icon-info-large' })) : null));
    };
    return Alert;
}(React.PureComponent));
exports.Alert = Alert;
