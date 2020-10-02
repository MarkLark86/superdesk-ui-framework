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
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a;
        var classes = classnames_1.default('btn', (_a = {
                'btn--expanded': this.props.expand
            },
            _a["btn--" + this.props.size] = this.props.size !== 'normal' && this.props.size !== undefined,
            _a["btn--" + this.props.type] = this.props.type !== 'default' && this.props.type !== undefined,
            _a["btn--" + this.props.style] = this.props.style !== 'filled' && this.props.style !== undefined,
            _a['btn--disabled'] = this.props.disabled,
            _a['btn--icon-only'] = !this.props.text,
            _a['btn--ui-dark'] = this.props.theme === 'dark',
            _a['btn--icon-only-circle'] = this.props.shape === 'round' && !this.props.text,
            _a));
        return (React.createElement("button", { className: this.props.navClass ? this.props.navClass : classes, onClick: this.props.onClick },
            this.props.icon ? React.createElement("i", { className: 'icon-' + this.props.icon }) : null,
            this.props.text));
    };
    return Button;
}(React.PureComponent));
exports.Button = Button;
