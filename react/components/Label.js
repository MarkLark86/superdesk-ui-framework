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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
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
            _a["" + this.props.color] = this.props.color !== undefined && !this.props.type && !this.props.style,
            _a['label--hollow'] = this.props.style === 'hollow',
            _a["hollow-" + this.props.color] = this.props.color && this.props.style === 'hollow',
            _a));
        if (this.props.link || this.props.onClick) {
            return (React.createElement("a", { href: this.props.link, className: classes, onClick: this.props.onClick }, this.props.text));
        }
        else {
            return (React.createElement("span", { className: classes }, this.props.text));
        }
    };
    return Label;
}(React.PureComponent));
exports.Label = Label;
