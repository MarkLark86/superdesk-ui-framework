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
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(props) {
        return _super.call(this, props) || this;
    }
    RadioButton.prototype.handleChange = function (value) {
        this.props.onChange(value);
    };
    RadioButton.prototype.render = function () {
        var _this = this;
        return (this.props.options.map(function (item, index) { return (React.createElement("span", { key: index, className: 'sd-check-button' +
                (item.disabled ? ' sd-checkbox--disabled' :
                    (_this.props.value === item.value ? ' checked' : '')), onClick: function () { return _this.handleChange(item.value); } },
            item.icon ? React.createElement("i", { className: "icon-" + item.icon }) : null,
            item.disabled ? React.createElement("label", { className: 'sd-check-button__text-label sd-label--disabled' }, item.label) : React.createElement("label", { className: 'sd-check-button__text-label' }, item.label))); }));
    };
    return RadioButton;
}(React.PureComponent));
exports.RadioButton = RadioButton;
