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
var FormLabel = /** @class */ (function (_super) {
    __extends(FormLabel, _super);
    function FormLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormLabel.prototype.render = function () {
        var classes = classnames_1.default('form-label form-label--block', {
            'form-label--light': this.props.style === 'light',
        });
        return (React.createElement("div", { className: classes }, this.props.text));
    };
    return FormLabel;
}(React.PureComponent));
exports.FormLabel = FormLabel;
