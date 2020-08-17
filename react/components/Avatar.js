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
exports.AvatarWrapper = exports.AvatarContentImage = exports.AvatarContentText = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var AvatarContentText = /** @class */ (function (_super) {
    __extends(AvatarContentText, _super);
    function AvatarContentText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarContentText.prototype.render = function () {
        return (React.createElement("span", { className: "sd-avatar-content sd-avatar-content--text", title: this.props.tooltipText },
            React.createElement("span", null, this.props.text.slice(0, 3))));
    };
    return AvatarContentText;
}(React.PureComponent));
exports.AvatarContentText = AvatarContentText;
var AvatarContentImage = /** @class */ (function (_super) {
    __extends(AvatarContentImage, _super);
    function AvatarContentImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarContentImage.prototype.render = function () {
        if (this.props.imageUrl == null) {
            return React.createElement("span", { className: "sd-avatar-content sd-avatar-content--empty", title: this.props.tooltipText });
        }
        else {
            return (React.createElement("span", { className: "sd-avatar-content", title: this.props.tooltipText },
                React.createElement("img", { src: this.props.imageUrl })));
        }
    };
    return AvatarContentImage;
}(React.PureComponent));
exports.AvatarContentImage = AvatarContentImage;
var AvatarWrapper = /** @class */ (function (_super) {
    __extends(AvatarWrapper, _super);
    function AvatarWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AvatarWrapper.prototype.render = function () {
        var _a;
        return (React.createElement("span", { className: classnames_1.default('sd-avatar', {
                'sd-avatar--small': this.props.size === 'small',
                'sd-avatar--medium': this.props.size === 'medium' || this.props.size == null,
                'sd-avatar--large': this.props.size === 'large',
            }), "data-test-id": this.props['data-test-id'] },
            this.props.children,
            this.props.statusIndicator != null
                ? (React.createElement("span", { className: this.props.statusIndicator.status === 'online'
                        ? 'sd-avatar--indicator-status--online'
                        : 'sd-avatar--indicator-status--offline', title: this.props.statusIndicator.tooltipText }))
                : null,
            ((_a = this.props.administratorIndicator) === null || _a === void 0 ? void 0 : _a.enabled) === true
                ? (React.createElement("i", { className: "icon-settings sd-avatar--indicator-admin", title: this.props.administratorIndicator.tooltipText }))
                : null));
    };
    return AvatarWrapper;
}(React.PureComponent));
exports.AvatarWrapper = AvatarWrapper;
