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
var Badge = /** @class */ (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badge.prototype.render = function () {
        var _a;
        var classes = classnames_1.default('badge', (_a = {},
            _a["badge--" + this.props.type] = this.props.type,
            _a['badge--square'] = this.props.style === 'square',
            _a));
        if (this.props.children) {
            return (React.createElement("div", { className: 'element-with-badge' },
                this.props.children,
                React.createElement("span", { className: classes }, this.props.text)));
        }
        else {
            return React.createElement("span", { className: classes }, this.props.text);
        }
    };
    return Badge;
}(React.PureComponent));
exports.Badge = Badge;
