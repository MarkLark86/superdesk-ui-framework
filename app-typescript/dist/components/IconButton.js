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
var IconButton = /** @class */ (function (_super) {
    __extends(IconButton, _super);
    function IconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconButton.prototype.render = function () {
        return (React.createElement("a", { onClick: this.props.onClick, className: "icn-btn", "data-sd-tooltip": this.props.tooltip ? this.props.tooltip.text : null, "data-flow": this.props.tooltip ?
                (this.props.tooltip.flow !== 'top' ? this.props.tooltip.flow : null) : null },
            React.createElement("i", { className: 'icon-' + this.props.icon })));
    };
    return IconButton;
}(React.PureComponent));
exports.IconButton = IconButton;
