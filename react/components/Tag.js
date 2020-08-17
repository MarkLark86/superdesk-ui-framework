"use strict";
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
exports.Tag = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
exports.Tag = function (_a) {
    var _b;
    var text = _a.text, keyValue = _a.keyValue, shade = _a.shade, shape = _a.shape, onClick = _a.onClick;
    var classes = classnames_1.default('tag-label', (_b = {},
        _b["tag-label--" + shade] = shade && shade !== 'light',
        _b['tag-label--square'] = shape === 'square',
        _b));
    return (React.createElement("div", { className: classes, key: keyValue },
        text,
        React.createElement("button", { className: 'tag-label__remove', onClick: onClick },
            React.createElement("i", { className: 'icon-close-small' }))));
};
