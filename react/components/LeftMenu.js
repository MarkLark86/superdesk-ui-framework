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
exports.LeftMenu = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var LeftMenu = /** @class */ (function (_super) {
    __extends(LeftMenu, _super);
    function LeftMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            active: '',
        };
        return _this;
    }
    LeftMenu.prototype.handleClick = function (id, route) {
        this.setState({
            active: id,
        });
        this.props.onSelect(id, route);
    };
    LeftMenu.prototype.render = function () {
        var _a;
        var _this = this;
        var classes = classnames_1.default('sd-left-nav', (_a = {},
            _a["" + this.props.navClass] = this.props.navClass,
            _a));
        return (React.createElement("nav", { className: classes, "aria-label": this.props.ariaLabel }, this.props.groups.map(function (group, i) {
            return (React.createElement(React.Fragment, { key: i },
                React.createElement("span", { className: 'sd-left-nav__group-header' }, group.label),
                group.items.map(function (item, j) {
                    return (React.createElement("button", { key: j, onClick: function () {
                            _this.handleClick(item.id, item.route ? item.route : '');
                        }, className: item.id === _this.state.active ? 'sd-left-nav__btn sd-left-nav__btn--active' : 'sd-left-nav__btn' }, item.label));
                })));
        })));
    };
    return LeftMenu;
}(React.PureComponent));
exports.LeftMenu = LeftMenu;
