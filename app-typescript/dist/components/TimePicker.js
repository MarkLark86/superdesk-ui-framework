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
var TimePicker = /** @class */ (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimePicker.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "sd-line-input sd-line-input--no-margin sd-line-input--no-label", style: { display: 'inline-block' } },
            React.createElement("input", { type: "time", className: "sd-line-input__input", value: this.props.value, required: this.props.required, disabled: this.props.disabled, onChange: function (event) {
                    _this.props.onChange(event.target.value);
                } })));
    };
    return TimePicker;
}(React.PureComponent));
exports.TimePicker = TimePicker;
