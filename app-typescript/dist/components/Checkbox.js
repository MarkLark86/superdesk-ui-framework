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
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleLabel = _this.handleLabel.bind(_this);
        return _this;
    }
    Checkbox.prototype.handleChange = function () {
        this.props.onChange(!this.props.checked);
    };
    Checkbox.prototype.handleLabel = function () {
        var classes = classnames_1.default({
            'sd-label--disabled': this.props.disabled,
            'label--active': this.props.checked,
        });
        return React.createElement("label", { className: classes }, this.props.label.text);
    };
    Checkbox.prototype.render = function () {
        return (React.createElement("span", { className: 'sd-check-new__wrapper', "label-position": this.props.label.side === 'left' ? 'left' : null },
            this.props.label.side === 'left' ? this.handleLabel() : null,
            React.createElement("span", { className: 'sd-check-new' +
                    (this.props.disabled ? (this.props.checked ? ' sd-check-new--disabled checked' : ' sd-check-new--disabled') :
                        (this.props.checked ? ' checked' : '')), onClick: this.handleChange }),
            !this.props.label.side ? this.handleLabel() : null));
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
