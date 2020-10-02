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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
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
                React.createElement("button", { className: 'sd-alert__close', onClick: this.onToggle }),
                this.props.children),
            this.props.restoreIcon ?
                React.createElement("span", { className: classesInfoBtn, onClick: this.onToggle },
                    React.createElement("i", { className: this.props.restoreIcon === 'help' ? 'icon-help-large' : 'icon-info-large' })) : null));
    };
    return Alert;
}(React.PureComponent));
exports.Alert = Alert;
