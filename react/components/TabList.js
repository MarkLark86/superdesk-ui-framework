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
exports.TabList = exports.Tab = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab.prototype.render = function () {
        return (React.createElement("div", { className: 'sd-nav-tabs__pane', role: 'tabpanel' }, this.props.children));
    };
    return Tab;
}(React.PureComponent));
exports.Tab = Tab;
var TabList = /** @class */ (function (_super) {
    __extends(TabList, _super);
    function TabList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            index: 0,
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.goTo = _this.goTo.bind(_this);
        return _this;
    }
    TabList.prototype.handleChange = function (index) {
        this.setState({
            index: index,
        });
    };
    TabList.prototype.goTo = function (label) {
        var refLabel = this.props.children.find(function (item) { return item.props.label === label; });
        this.setState({
            index: this.props.children.indexOf(refLabel),
        });
    };
    TabList.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = classnames_1.default('sd-nav-tabs', (_a = {},
            _a["sd-nav-tabs--" + this.props.size] = this.props.size && this.props.size !== undefined,
            _a['sd-nav-tabs--ui-dark'] = this.props.theme === 'dark',
            _a));
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: classes, role: 'tablist' }, this.props.children.map(function (item, index) {
                return React.createElement("button", { key: index, onClick: function () { return _this.handleChange(index); }, role: 'tab', "aria-selected": _this.state.index === index ? 'true' : 'false', className: 'sd-nav-tabs__tab' + (_this.state.index === index ? ' sd-nav-tabs__tab--active' : '') },
                    React.createElement("span", null, item.props.label));
            })),
            React.createElement("div", { className: 'sd-nav-tabs__content' +
                    (this.props.theme === 'dark' ? ' sd-nav-tabs__content--ui-dark' : '') }, this.props.children[this.state.index])));
    };
    return TabList;
}(React.PureComponent));
exports.TabList = TabList;
