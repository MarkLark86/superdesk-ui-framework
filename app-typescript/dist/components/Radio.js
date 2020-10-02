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
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(props) {
        var _this = _super.call(this, props) || this;
        _this.handleLabel = _this.handleLabel.bind(_this);
        return _this;
    }
    Radio.prototype.handleChange = function (value) {
        this.props.onChange(value);
    };
    Radio.prototype.handleLabel = function (item) {
        var classes = classnames_1.default({
            'sd-label--disabled': item.disabled,
            'label--active': this.props.value === item.value,
        });
        return React.createElement("label", { className: classes }, item.label);
    };
    Radio.prototype.render = function () {
        var _this = this;
        return (this.props.options.map(function (item, index) { return (React.createElement("span", { className: 'sd-check-new__wrapper', key: index, "label-position": _this.props.labelSide === 'left' ? 'left' : null },
            _this.props.labelSide === 'left' ? _this.handleLabel(item) : null,
            React.createElement("span", { className: 'sd-radio-new' +
                    (item.disabled ? ' sd-checkbox--disabled' :
                        (_this.props.value === item.value ? ' checked' : '')), onClick: function () { return _this.handleChange(item.value); } }),
            !_this.props.labelSide ? _this.handleLabel(item) : null)); }));
    };
    return Radio;
}(React.PureComponent));
exports.Radio = Radio;
