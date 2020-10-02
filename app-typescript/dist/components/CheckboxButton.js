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
var CheckboxButton = /** @class */ (function (_super) {
    __extends(CheckboxButton, _super);
    function CheckboxButton(props) {
        var _this = _super.call(this, props) || this;
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
        return (React.createElement("span", { className: 'sd-check-button' +
                (this.props.disabled ? ' sd-check-new--disabled' :
                    (this.props.checked ? ' checked' : '')), onClick: this.handleChange },
            this.props.icon ? React.createElement("i", { className: "icon-" + this.props.icon }) : null,
            this.props.disabled ?
                (React.createElement("label", { className: 'sd-check-button__text-label sd-label--disabled' }, this.props.label.text)) : (React.createElement("label", { className: 'sd-check-button__text-label' }, this.props.label.text))));
    };
    return CheckboxButton;
}(React.PureComponent));
exports.CheckboxButton = CheckboxButton;
