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
exports.CheckButtonGroup = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var CheckButtonGroup = /** @class */ (function (_super) {
    __extends(CheckButtonGroup, _super);
    function CheckButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckButtonGroup.prototype.render = function () {
        var _a;
        var classes = classnames_1.default('sd-check-button__group', (_a = {},
            _a["sd-check-button__group--" + this.props.align] = this.props.align,
            _a["sd-check-button__group--left"] = !this.props.grid && this.props.align === undefined,
            _a["button-group--vertical"] = this.props.orientation === 'vertical',
            _a["sd-check-button__group--grid"] = this.props.grid,
            _a["sd-check-button__group--padded"] = this.props.padded === true,
            _a));
        return (React.createElement("div", { className: classes }, this.props.children));
    };
    return CheckButtonGroup;
}(React.PureComponent));
exports.CheckButtonGroup = CheckButtonGroup;
