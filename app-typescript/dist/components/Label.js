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
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var _a;
        var classes = classnames_1.default('label', (_a = {},
            _a["label--" + this.props.size] = this.props.size !== 'normal' && this.props.size !== undefined,
            _a['label--no-transform'] = this.props.noTransform,
            _a["label--" + this.props.type] = this.props.type !== undefined && !this.props.color,
            _a["" + this.props.color] = this.props.color !== undefined && !this.props.type,
            _a['label--hollow'] = this.props.style === 'hollow',
            _a["hollow-" + this.props.color] = this.props.color,
            _a));
        if (this.props.onClick) {
            return (React.createElement("a", { href: '', className: classes }, this.props.text));
        }
        else {
            return (React.createElement("span", { className: classes }, this.props.text));
        }
    };
    return Label;
}(React.PureComponent));
exports.Label = Label;
