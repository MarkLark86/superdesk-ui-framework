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
exports.EmptyState = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var EmptyState = /** @class */ (function (_super) {
    __extends(EmptyState, _super);
    function EmptyState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmptyState.prototype.render = function () {
        var _a;
        var classes = classnames_1.default('content-state__image-l', (_a = {},
            _a["" + this.props.size] = this.props.size !== 'normal' && this.props.size !== undefined,
            _a));
        var image = require("../../app/img/empty_states/empty-state_" + (this.props.ilustration ? this.props.ilustration : 'default') + ".svg");
        return (React.createElement("div", { className: 'content-state__empty-info' },
            React.createElement("figure", { className: classes, style: { backgroundImage: "url(" + image + ")" } }),
            React.createElement("h3", { className: 'content-state__heading' }, this.props.title),
            React.createElement("p", { className: 'content-state__description' }, this.props.description)));
    };
    return EmptyState;
}(React.PureComponent));
exports.EmptyState = EmptyState;
