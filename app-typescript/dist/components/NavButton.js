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
var Button_1 = require("./Button");
var NavButton = /** @class */ (function (_super) {
    __extends(NavButton, _super);
    function NavButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavButton.prototype.render = function () {
        var _a;
        var classes = classnames_1.default('sd-navbtn', (_a = {
                'sd-navbtn-dark': this.props.theme === 'dark'
            },
            _a["sd-navbtn--" + this.props.type] = this.props.type,
            _a));
        return (React.createElement(Button_1.Button, { navClass: classes, icon: this.props.icon, onClick: this.props.onClick }));
    };
    return NavButton;
}(React.PureComponent));
exports.NavButton = NavButton;
