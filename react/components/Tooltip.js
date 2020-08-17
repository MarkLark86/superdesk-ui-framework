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
exports.Tooltip = void 0;
var React = __importStar(require("react"));
var react_id_generator_1 = __importDefault(require("react-id-generator"));
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlId = react_id_generator_1.default();
        return _this;
    }
    Tooltip.prototype.componentDidMount = function () {
        var tooltip = document.getElementById('t' + this.htmlId);
        tooltip === null || tooltip === void 0 ? void 0 : tooltip.setAttribute('data-sd-tooltip', this.props.text);
        if (this.props.flow) {
            tooltip === null || tooltip === void 0 ? void 0 : tooltip.setAttribute('data-flow', this.props.flow);
        }
    };
    Tooltip.prototype.render = function () {
        if (React.isValidElement(this.props.children)) {
            return (React.cloneElement(this.props.children, { id: 't' + this.htmlId }));
        }
        else {
            return (React.createElement(React.Fragment, null));
        }
    };
    return Tooltip;
}(React.PureComponent));
exports.Tooltip = Tooltip;
