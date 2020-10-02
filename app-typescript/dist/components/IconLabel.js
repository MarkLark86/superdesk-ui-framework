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
var IconLabel = /** @class */ (function (_super) {
    __extends(IconLabel, _super);
    function IconLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconLabel.prototype.render = function () {
        var _a;
        var classes = classnames_1.default('label-icon', (_a = {},
            _a["label-icon--" + this.props.type] = this.props.type !== undefined,
            _a));
        return (React.createElement("span", { className: classes },
            React.createElement("i", { className: 'icon-' + this.props.icon }),
            " ",
            this.props.text));
    };
    return IconLabel;
}(React.PureComponent));
exports.IconLabel = IconLabel;
