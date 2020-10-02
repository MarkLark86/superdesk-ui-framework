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
var CheckGroup = /** @class */ (function (_super) {
    __extends(CheckGroup, _super);
    function CheckGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckGroup.prototype.render = function () {
        var _a;
        var classes = classnames_1.default('sd-check__group-new', (_a = {},
            _a["sd-check__group-new--vertical"] = this.props.orientation === 'vertical',
            _a));
        return (React.createElement("div", { className: classes }, this.props.children));
    };
    return CheckGroup;
}(React.PureComponent));
exports.CheckGroup = CheckGroup;
