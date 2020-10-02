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
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    Switch.prototype.onClick = function () {
        if (this.props.disabled) {
            return;
        }
        this.props.onChange(!this.props.value);
    };
    Switch.prototype.render = function () {
        var classes = classnames_1.default('sd-toggle', {
            'checked': this.props.value,
            'disabled': this.props.disabled,
        });
        return (React.createElement("span", { className: classes, onClick: this.onClick },
            React.createElement("span", { className: "inner" })));
    };
    return Switch;
}(React.PureComponent));
exports.Switch = Switch;
