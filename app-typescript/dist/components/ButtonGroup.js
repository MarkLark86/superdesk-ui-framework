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
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var _a;
        var classes = classnames_1.default('button-group', (_a = {},
            _a["button-group--" + this.props.align] = this.props.align,
            _a["button-group--vertical"] = this.props.orientation === 'vertical',
            _a["button-group--compact"] = this.props.spaces === 'compact',
            _a));
        return (React.createElement("div", { className: classes }, this.props.children));
    };
    return ButtonGroup;
}(React.PureComponent));
exports.ButtonGroup = ButtonGroup;
