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
exports.TabPanel = exports.TabContent = exports.Tabs = exports.TabLabel = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
exports.TabLabel = function (_a) {
    var label = _a.label;
    return (React.createElement("span", null, label));
};
exports.Tabs = function (_a) {
    var _b;
    var size = _a.size, theme = _a.theme, ariaLabel = _a.ariaLabel, children = _a.children, onClick = _a.onClick;
    var _c = React.useState(0), index = _c[0], setIndex = _c[1];
    function handleSelected(i) {
        setIndex(i);
        handleClick(i);
    }
    var handleClick = function (i) {
        onClick(i);
    };
    var classes = classnames_1.default('sd-nav-tabs', (_b = {},
        _b["sd-nav-tabs--" + size] = size && size !== undefined,
        _b['sd-nav-tabs--ui-dark'] = theme === 'dark',
        _b));
    return (React.createElement("div", { className: classes, role: 'tablist', "aria-label": ariaLabel ? ariaLabel : 'tabs' }, children.map(function (item, i) {
        return React.createElement("button", { key: i, "aria-controls": 'tabpanel-' + i, className: 'sd-nav-tabs__tab' + (index === i ? ' sd-nav-tabs__tab--active' : ''), onClick: function () { return handleSelected(i); }, role: 'tab', "aria-selected": index === i ? 'true' : 'false' }, item);
    })));
};
exports.TabContent = function (_a) {
    var theme = _a.theme, children = _a.children, activePanel = _a.activePanel;
    return (React.createElement("div", { className: 'sd-nav-tabs__content' +
            (theme === 'dark' ? ' sd-nav-tabs__content--ui-dark' : '') }, children.map(function (panel, i) {
        return panel.props.indexValue === activePanel ?
            React.createElement("div", { className: 'sd-nav-tabs__pane', role: 'tabpanel', "aria-labelledby": 'tab-' + activePanel, key: i }, panel) : null;
    })));
};
exports.TabPanel = function (_a) {
    var children = _a.children, indexValue = _a.indexValue;
    return (React.createElement(React.Fragment, { key: indexValue }, children));
};
